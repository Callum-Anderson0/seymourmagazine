import { useState } from "react";
import SignUp from "./SignUp";
import StripeButton from "./StripeButton";
function Header() {
  return (
    <header
      className="fixed top-4 right-4 flex items-center rounded-xl z-20 shadow-lg min-w-[120px]"
      style={{ maxWidth: "none" }}
    >
      <div className="w-full flex items-center justify-center">
        <StripeButton />
      </div>
    </header>
  );
}

export default Header;
