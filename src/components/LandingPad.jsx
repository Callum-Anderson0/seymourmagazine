import { useRef, useState, useEffect } from "react";
import GrowOnInteract from "./GrowOnInteract";
import Information from "./Information";
function LandingPad() {
  const logoRef = useRef(null);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = "/seym wallpaper web (1).webp";
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <div
      style={{
        backgroundImage: bgLoaded ? "url('/seym wallpaper web (1).webp')" : undefined,
        backgroundSize: "auto",
        backgroundRepeat: "repeat-y", // Add this line
        backgroundColor: bgLoaded ? undefined : "rgb(234,104,20)",
      }}
      className=" bg-center "
    >
      <div className="w-screen h-screen justify-center items-center flex flex-col">
        <GrowOnInteract>
          <img
            ref={logoRef}
            src="/seymourlogo.png"
            alt="Seymour Magazine Logo"
            className="transition-transform translate-y-[-10%] md:translate-y-[-5%] duration-500 ease-in-out hover:scale-105 active:scale-100"
            //onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          />
        </GrowOnInteract>
      </div>
      <Information />
    </div>
  );
}
export default LandingPad;
