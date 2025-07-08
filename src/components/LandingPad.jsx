import { useRef } from "react";

function LandingPad() {
  const logoRef = useRef(null);

  // Handle click animation for logo
  const handleLogoClick = () => {
    const logo = logoRef.current;
    if (!logo) return;
    // Temporarily remove the inline transition so Tailwind hover works after
    logo.style.transition = "transform 0.18s cubic-bezier(0.4, 0, 0.2, 1)";
    logo.style.transform = "scale(1.075)";
    setTimeout(() => {
      logo.style.transition = "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)";
      logo.style.transform = "scale(1)";
      // Remove inline style after animation so Tailwind hover works again
      setTimeout(() => {
        logo.style.transition = null;
        logo.style.transform = null;
      }, 250);
    }, 180);
  };

  return (
    <div
      style={{
        backgroundImage: "url('/seym wallpaper web (1).webp')",
        backgroundSize: "auto",
      }}
      className="w-screen h-screen bg-no-repeat bg-center overflow-hidden shadow-lg justify-center items-center flex flex-col"
    >
      <img
        ref={logoRef}
        src="/seymourlogo.png"
        alt="Seymour Magazine Logo"
        className="transition-transform duration-500 ease-in-out hover:scale-105 active:scale-100"
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
export default LandingPad;
