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
    );
}

export default SignUp; 