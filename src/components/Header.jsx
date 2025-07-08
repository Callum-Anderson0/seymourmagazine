import { useState } from "react";
import SignUp from "./SignUp";
import StripeButton from "./StripeButton";
function Header() {
  return (
    <header
      className="fixed top-4 right-4 bg-gray-100 text-gray-900 p-3 flex items-center rounded-xl z-20 shadow-lg min-w-[120px]"
      style={{ maxWidth: "none" }}
    >
      <div className="whitespace-nowrap w-full flex items-center justify-center text-bold">
        <StripeButton />
      </div>
    </header>
  );
}

export default Header;
