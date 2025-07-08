import { useState } from "react";
import SignUp from "./SignUp";
import StripeButton from "./StripeButton";
import GrowOnInteract from "./GrowOnInteract";
function Header() {
  return (
    <header
      className="fixed top-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:[right:1.5rem] flex items-center rounded-xl z-20 shadow-lg min-w-[120px]"
      style={{ maxWidth: "none" }}
    >
      <div className="w-full flex items-center justify-center">
        <GrowOnInteract>
          <StripeButton />
        </GrowOnInteract>
      </div>
    </header>
  );
}

export default Header;
