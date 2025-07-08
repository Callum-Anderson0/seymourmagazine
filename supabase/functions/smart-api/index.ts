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
      return `Successfully added to waitlist, but failed to send confirmation email: ${errorData.message}`;
    }
    return 'Successfully added to waitlist and sent confirmation email';
  } catch (error) {
    console.error('Email sending error:', error);
    return `Successfully added to waitlist, but failed to send confirmation email: ${error.message}`;
  }
}
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
async function handleInsert(data) {
  const { name: name, email } = data;
  if (!validateEmail(email)) {
    return `Invalid Email`;
  }
  try {
    const { data: insertData, error } = await supabaseClient.from('Waitlist').insert([
      {
        Name: name,
        Email: email
      }
    ]);
    if (error) {
      console.error("error inserting data", error);
      return `Error inserting data: ${error.message}`;
    } else {
      return await confirmationEmail(email, name);
    }
  } catch (error) {
    return `Error inserting data: ${error.message}`;
  }
}
Deno.serve(async (req)=>{
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: corsHeaders
    });
  }
  console.log("Edge function starting");
  const { action, data } = await req.json();
  let responseMessage = '';
  if (action === 'insert') {
    responseMessage = await handleInsert(data);
  } else if (action === 'confirmEmail') {
    responseMessage = await confirmationEmail(data.email, data.name);
  } else {
    responseMessage = 'Invalid action';
  }
  return new Response(JSON.stringify({
    message: responseMessage
  }), {
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json',
      'Connection': 'keep-alive'
    }
  });
});
