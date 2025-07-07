import { useState } from "react";
import SignUp from "./SignUp";
function Header() {
  const [display, setDisplay] = useState(false);
  const [placement, setPlacement] = useState("left-[80%] top-[2%]");
  return (
    <header
      className={
        `bg-gray-100 text-gray transform ` +
        placement +
        ` p-2 justify-between flex items-center shadow-lg text-md font-bold fixed rounded-xl z-20`
      }
    >
      {display != true && (
        <button
          onClick={() => {
            setDisplay(true);
            setPlacement(" top-[2%] md:left-[55%] sm:left-[10%] ");
          }}
          className=" p-2 text-gray-800"
        >
          JOIN THE MAILING LIST
        </button>
      )}
      {display && (
        <div>
          <SignUp />
          <button
            onClick={() => {
              setDisplay(false);
              setPlacement("left-[80%] top-[2%]");
            }}
          >
            MINIMIZE
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
