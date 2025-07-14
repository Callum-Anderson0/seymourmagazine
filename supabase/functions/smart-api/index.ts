// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from 'jsr:@supabase/supabase-js@2';
console.info('server started');
// Define CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
};
const supabaseClient = createClient(Deno.env.get('SUPABASE_URL'), Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'));
async function confirmationEmail(email, name) {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'confirmation@seymourmagazine.com',
        to: email,
        subject: 'Welcome to our waitlist!',
        html: `<p>Hello ${name},</p><p>Thank you for joining our waitlist. We'll keep you updated on our progress.</p>`
      })
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Failed to send email:', errorData);
      return {
        success: true,
        partial: true,
        message: 'Successfully added to waitlist, but failed to send confirmation email.',
        error: errorData.message || 'Email send error'
      };
    }
    return {
      success: true,
      message: 'Successfully added to waitlist and sent confirmation email.'
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: true,
      partial: true,
      message: 'Successfully added to waitlist, but failed to send confirmation email.',
      error: error.message || 'Email send error'
    };
  }
}
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
async function handleInsert(data) {
  const { name: name, email } = data;
  if (!validateEmail(email)) {
    return {
      success: false,
      message: 'Invalid email address.',
      error: 'ValidationError'
    };
  }
  try {
    const { data: insertData, error } = await supabaseClient.from('Waitlist').insert([
      {
        Name: name,
        Email: email
      }
    ]);
    if (error) {
      console.error('Error inserting data', error);
      return {
        success: false,
        message: 'Error inserting data.',
        error: error.message || 'DatabaseError'
      };
    } else {
      return await confirmationEmail(email, name);
    }
  } catch (error) {
    return {
      success: false,
      message: 'Error inserting data.',
      error: error.message || 'DatabaseError'
    };
  }
}
Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: corsHeaders
    });
  }
  try {
    console.log('Edge function starting');
    const { action, data } = await req.json();
    let result;
    let status = 200;
    if (action === 'insert') {
      result = await handleInsert(data);
      if (!result.success) status = result.error === 'ValidationError' ? 400 : 500;
      else if (result.partial) status = 207; // Multi-Status for partial success
    } else if (action === 'confirmEmail') {
      result = await confirmationEmail(data.email, data.name);
      if (!result.success) status = 500;
      else if (result.partial) status = 207;
    } else {
      result = {
        success: false,
        message: 'Invalid action',
        error: 'InvalidAction'
      };
      status = 400;
    }
    return new Response(JSON.stringify(result), {
      status,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
        'Connection': 'keep-alive'
      }
    });
  } catch (err) {
    console.error('Unexpected error:', err);
    return new Response(JSON.stringify({
      success: false,
      message: 'Unexpected server error.',
      error: err.message || 'UnknownError'
    }), {
      status: 500,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
        'Connection': 'keep-alive'
      }
    });
  }
});
