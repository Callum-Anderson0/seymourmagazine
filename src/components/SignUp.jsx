import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient"; // Ensure this path is correct

function SignUp() {
    const [userInformation, setUserInformation] = useState({ name: "", email: "", permission: false });
    const [error, setError] = useState("");

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
        addEntryToDatabase();
        setUserInformation({ name: "", email: "", permission: false });
        setError(""); 
    }

    useEffect(() => {
        console.log(userInformation);
    }, [userInformation]);

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
    
    async function addEntryToDatabase() {
        if(userInformation.permission){
            if(validateEmail(userInformation.email)){
                const {data, error} = await supabase
                    .from('Waitlist')
                    .insert([
                        { Name: userInformation.name, Email: userInformation.email }
                    ]);
                if (error) {
                    console.error('Error inserting row:', error);
                } else {
                    console.log('Inserted row:', data);
                }
            }
            else{
                setError("Please enter a valid email address.");
                console.error('Invalid email address. Entry not added to database.');
            }
        }else{
            setError("You must grant permission by checking the box to be added to the database.");
            console.error('Permission not granted. Entry not added to database.');
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
            <p>{error}</p>
        </form>
    );
}

export default SignUp; 