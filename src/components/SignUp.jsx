import { useState } from "react";
import { supabase } from "../supabaseClient"; // Ensure this path is correct
import GrowOnInteract from "./GrowOnInteract";

function SignUp() {
  const [userInformation, setUserInformation] = useState({
    name: "",
    email: "",
    permission: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  async function callEdgeFunctions(action) {
    setLoading(true);
    setError("");
    const { data, error } = await supabase.functions.invoke("smart-api", {
      body: { action: action, data: userInformation },
    });
    if (error) {
      setError(error.message);
      console.error("Error calling edge function:", error);
      setLoading(false);
      return;
    } else {
      console.log("Edge function response:", data);
      if (
        data &&
        typeof data.message === "string" &&
        data.message.toLowerCase().includes("error")
      ) {
        setError(data.message);
      } else {
        setError("");
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 1000);
      }
    }
    setLoading(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUserInformation((prev) => ({ ...prev, [name]: value }));
    if (!validateEmail(userInformation.email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  }

  function handleCheckbox(e) {
    const { name, checked } = e.target;
    setUserInformation((prev) => ({ ...prev, [name]: checked }));
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevent page refresh
    if (!userInformation.name || !userInformation.email) {
      setError("Name and Email are required.");
      return;
    }
    if (!userInformation.permission) {
      setError("You must agree to the terms.");
      return;
    }

    console.log("User Information Submitted:", userInformation);
    callEdgeFunctions("insert");

    setUserInformation({ name: "", email: "", permission: false });
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
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
    <form
      onSubmit={handleSubmit}
      className="bg-white/80 rounded-xl pt-8 w-full text-gray-900 backdrop-blur-sm"
    >
      <h2 className="mb-4 text-center text-gray-800 font-bold text-2xl">
        MAILING LIST
      </h2>
      <p className="text-center text-gray-800 pb-2">
        sign up here to be notified when we release our latest edition!!!
      </p>
      <div className="flex flex-col lg:flex-row lg:space-x-6 gap-4">
        <input
          name="name"
          placeholder="Name"
          value={userInformation.name}
          onChange={handleChange}
          className="flex-1 rounded-full px-3 py-2 text-gray-900 bg-gray-50 focus:ring-2 focus:ring-gray-200 focus:outline-none transition"
        />
        <input
          name="email"
          placeholder="Email"
          value={userInformation.email}
          onChange={handleChange}
          className="flex-1 rounded-full px-3 py-2 text-gray-900 bg-gray-50 focus:ring-2 focus:ring-gray-200 focus:outline-none transition"
        />
      </div>

      <div className="flex flex-col items-center justify-center mt-4">
        <div className="flex items-center space-x-2">
          <input
            name="permission"
            type="checkbox"
            checked={userInformation.permission}
            onChange={handleCheckbox}
            className="form-checkbox h-5 w-5 text-gray-600 focus:ring-2 focus:ring-gray-200"
          />
          <span className="text-gray-800 text-sm">
            By clicking this you agree to hear from us in the future
          </span>
        </div>
      </div>

      <div className="flex w-full justify-center mt-6">
        <GrowOnInteract className="w-full">
          <button
            type="submit"
            className="w-full min-w-[220px] h-[45.6px] flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 transition-colors rounded-full px-12 font-semibold relative overflow-hidden"
          >
            {!loading && !showSuccess && <p>☆ SIGN UP ☆</p>}
            {loading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}
            {!loading && showSuccess && (
              <span
                className="transition-opacity duration-500 opacity-100"
                style={{ transition: 'opacity 0.5s', opacity: showSuccess ? 1 : 0 }}
              >
                ✓
              </span>
            )}
          </button>
        </GrowOnInteract>
      </div>

      <p className="text-red-500 min-h-[1em] mt-2 text-center">{error}</p>
    </form>
  );
}

export default SignUp;
