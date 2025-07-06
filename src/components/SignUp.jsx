import { useState } from "react";
import { supabase } from "../supabaseClient"; // Ensure this path is correct

function SignUp() {
    const [userInformation, setUserInformation] = useState({ name: "", email: "", permission: false });
    const [error, setError] = useState("");

    async function callEdgeFunctions(action) {
        const { data, error } = await supabase.functions.invoke('smart-api', {
            body: { action : action, data: userInformation },
        });
        if (error) {
            setError(error.message);
            console.error('Error calling edge function:', error);
            return;   
        }else{
            console.log('Edge function response:', data);
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setUserInformation((prev) => ({ ...prev, [name]: value }));
    }

    function handleCheckbox(e) {
        const { name, checked } = e.target;
        setUserInformation((prev) => ({ ...prev, [name]: checked }));
    }

    function handleSubmit(e) {
        if(!userInformation.name || !userInformation.email) {
            setError("Name and Email are required.");
            return;
        }
        if(!userInformation.permission) {
            setError("You must agree to the terms.");
            return;
        } 

        e.preventDefault(); // prevent page refresh

        console.log("User Information Submitted:", userInformation);
        callEdgeFunctions("insert");

        setUserInformation({ name: "", email: "", permission: false });
    }

    // async function callApiFrontEnd(){
    //      try {
    //         const { data, error } = await supabase
    //             .from('Waitlist')
    //             .insert([{ name: userInformation.name, email: userInformation.email}]);

    //         if (error) {
    //             setError(error.message);
    //             console.error('Error inserting row:', error);
    //         } else {
    //             console.log('Inserted row:', data);
    //         }
    //     } catch (err) {
    //         setError("Unexpected error occurred.");
    //         console.error('Unexpected error:', err);
    //     }
    // }

    return (
        /* Multi-line
     
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="name" value={userInformation.name} onChange={handleChange} />
            <input name="email" placeholder="email" value={userInformation.email} onChange={handleChange} />
            <p>By clicking this you agree to hear from us in the future</p>
            <input
                name="permission"
                type="checkbox"
                checked={userInformation.permission}
                onChange={handleCheckbox}
            />
            <button type="submit">Sign Up</button>
            <p style={{color: "red", minHeight: '1em'}}>{error}</p>
        </form>
        comment here */
        <div className="shadow-lg">
            <form
  onSubmit={handleSubmit}
  className="bg-gray-800 border border-white rounded-lg p-6 mt-8 max-w-4xl mx-auto text-white"
>
  <div className="flex flex-col lg:flex-row lg:space-x-6 gap-4">
    <input
      name="name"
      placeholder="Name"
      value={userInformation.name}
      onChange={handleChange}
      className="flex-1 rounded-md px-3 py-2 text-gray-900 bg-gray-700"
    />
    <input
      name="email"
      placeholder="Email"
      value={userInformation.email}
      onChange={handleChange}
      className="flex-1 rounded-md px-3 py-2 text-gray-900 bg-gray-700"
    />
  </div>

  <div className="flex items-center space-x-2 mt-2">
    <input
      name="permission"
      type="checkbox"
      checked={userInformation.permission}
      onChange={handleCheckbox}
      className="form-checkbox h-5 w-5 text-gray-600 bg-gray-700"
    />
    <span className="text-white text-sm">
      By clicking this you agree to hear from us in the future
    </span>
  </div>

  <button
    type="submit"
    className="mt-4 w-full lg:w-auto bg-gray-700 hover:bg-indigo-700 transition-colors rounded-md py-2 px-8 font-semibold"
  >
    Sign Up
  </button>

  <p className="text-red-500 min-h-[1em] mt-2">{error}</p>
</form>

        </div >
    );
} 


export default SignUp; 