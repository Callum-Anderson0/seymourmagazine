import Edition from "./Edition";
import EditionSignUp from "./EditionSignUp";
import EditionBuyNow from "./EditionBuyNow";
import EditionInstagram from "./EditionInstagram";
import Button from "./Button";
import Vision from "./vision";

function Information() {
  return (
    <div
      className="flex flex-1 flex-col md:flex-row h-[70vh] items-start justify-center p-1 md:p-4"
    >
      <div
        className="w-1/3 h-full bg-cover bg-center rounded-lg shadow-lg mx-4"
        style={{ backgroundImage: "url('./second edition (1).png')" }}
      >
        <Vision />
      </div>
      <div className="w-2/3 mx-auto space-y-4 h-full overflow-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {/* Second Edition - children distributed evenly */}
        <Edition 
          imageSrc="/second edition.png"
          title="SECOND EDITION - COMING SOON"
          description="the second edition of SEYMOUR is coming soon !! get ready for more artists, more writers, and more good energy 🤠 keep your eyes on the seymour instagram for updates and release date !! ☆ ☆ ☆ love ya xx"
          imageAlt="Second Edition Cover"
          theme="dark"
          childrenLayout="justify-between"
        >
          <EditionBuyNow theme="light" />
        </Edition>

        {/* First Edition - children centered (default) */}
        <Edition
          imageSrc="/first edition.jpg"
          title="FIRST EDITION - SOLD OUT (ᗒᗣᗕ)"
          description="the very first edition of seymour is out & about and i'd love for you to have one !!! ⭐️ here's a little sneak peak, but there's lots and lots more to see 🤓 this is a lovely little collection of poetry, prose, arts and farts - anything goes 🦶 it'll look fab on your coffee table xx"
          imageAlt="First Edition Cover"
          theme="light"
          // No childrenLayout prop = uses default "justify-center"
        >
        </Edition>
      </div>
    </div>
  );
}

export default Information;
