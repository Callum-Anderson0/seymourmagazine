import { useRef } from "react";
import GrowOnInteract from "./GrowOnInteract";

function LandingPad() {
  const logoRef = useRef(null);

  return (
    <div
      style={{
        backgroundImage: "url('/seym wallpaper web (1).webp')",
        backgroundSize: "auto",
      }}
      className="w-screen h-screen bg-no-repeat bg-center overflow-hidden shadow-lg justify-center items-center flex flex-col"
    >
      <GrowOnInteract>
        <img
          ref={logoRef}
          src="/seymourlogo.png"
          alt="Seymour Magazine Logo"
          className="transition-transform translate-y-[-5%] duration-500 ease-in-out hover:scale-105 active:scale-100"
          //onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        />
      </GrowOnInteract>
    </div>
  );
}
export default LandingPad;
