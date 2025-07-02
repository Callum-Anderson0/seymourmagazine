import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient"; // Ensure this path is correct

function SignUp() {
    const [userInformation, setUserInformation] = useState({ name: "", email: "", permission: false });
    const [error, setError] = useState("");

    async function callHelloFunction(action,data) {
        const { data, error } = await supabase.functions.invoke('smart-api', {
            body: { action: action, data: data },
        })
        if (error) {
            console.error('Error calling function:', error);
        } else {
            console.log('Function response:', data);
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
        e.preventDefault(); // prevent page refresh
        console.log("User Information Submitted:", userInformation);
        //addEntryToDatabase();
        callHelloFunction("insert", {name: userInformation.name, email: userInformation.email});
        setUserInformation({ name: "", email: "", permission: false });
    }

    useEffect(() => {
        console.log(userInformation);
    }, [userInformation]);

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    async function validateUserInformation() {
        const { name, email, permission } = userInformation;

        if (!permission) {
            setError("You must grant permission by checking the box to be added to the database.");
            console.error('Permission not granted. Entry not added to database.');
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            console.error('Invalid email address. Entry not added to database.');
            return;
        }

        setError("");

        try {

            const { data, error } = await supabase
                .from('Waitlist')
                .insert([{ Name: name, Email: email }]);

            if (error) {
                setError(error.message);
                console.error('Error inserting row:', error);
            } else {
                console.log('Inserted row:', data);
            }
        } catch (err) {
            setError("Unexpected error occurred.");
            console.error('Unexpected error:', err);
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={userInformation.name} onChange={handleChange} />
            <input name="email" value={userInformation.email} onChange={handleChange} />
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