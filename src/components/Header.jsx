import { useState } from "react";
import SignUp from "./SignUp";
import StripeButton from "./StripeButton";
function Header() {
  return (
    <header
      className={`bg-gray-100 text-gray transform left-[80%] top-[2%] p-2 justify-between flex items-center shadow-lg text-md font-bold fixed rounded-xl z-20`}
    >
      <StripeButton />
    </header>
  );
}

export default Header;
