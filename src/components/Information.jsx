import Edition from "./Edition";
import EditionSignUp from "./EditionSignUp";
import EditionBuyNow from "./EditionBuyNow";
import EditionInstagram from "./EditionInstagram";
import Button from "./Button";

function Information() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-1 md:p-8">
      <div className="w-full mx-auto space-y-6">
        {/* Second Edition with Buy Now button */}
        <Edition 
          imageSrc="/second edition.png"
          title="SECOND EDITION - COMING SOON"
          description="the second edition of SEYMOUR is coming soon !! get ready for more artists, more writers, and more good energy 🤠 keep your eyes on the seymour instagram for updates and release date !! ☆ ☆ ☆ love ya xx"
          imageAlt="Second Edition Cover"
        >
          <EditionBuyNow />
        </Edition>

        {/* First Edition with SignUp and Instagram */}
        <Edition 
          imageSrc="/first edition.jpg"
          title="FIRST EDITION - SOLD OUT (ᗒᗣᗕ)"
          description="the very first edition of seymour is out & about and i'd love for you to have one !!! ⭐️ here's a little sneak peak, but there's lots and lots more to see 🤓🤓 this is a lovely little collection of poetry, prose, arts and farts - anything goes 🦶 it'll look fab on your coffee table xx"
          imageAlt="First Edition Cover"
        >
          <div className="flex flex-col gap-4 w-full">
            <EditionSignUp />
            <EditionInstagram />
          </div>
        </Edition>
      </div>
    </div>
  );
}

export default Information;
