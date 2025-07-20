import Edition from "./Edition";
import EditionSignUp from "./EditionSignUp";
import EditionBuyNow from "./EditionBuyNow";
import EditionInstagram from "./EditionInstagram";
import Button from "./Button";

function Information() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-1 md:p-8">
      <div className="w-full mx-auto space-y-6">
        {/* Second Edition with Buy Now button - dark theme */}
        <Edition
          imageSrc="/second edition.png"
          title="SECOND EDITION - COMING SOON"
          description="the second edition of SEYMOUR is coming soon !! get ready for more artists, more writers, and more good energy 🤠 keep your eyes on the seymour instagram for updates and release date !! ☆ ☆ ☆ love ya xx"
          imageAlt="Second Edition Cover"
          theme="dark"
        >
          <h2 className={`text-2xl font-bold text-center`}>THE VISION</h2>
          <p className={`text-center pb-4`}>
            SEYMOUR is not just a magazine, it's a collective space for artists, writers, and creatives. Its aim is to platform smaller artists, offering support, exposure and community. We also hope to play a role in the return of print media ... PRINT IS NOT DEAD. To get involved, drop me a message on Instagram, my dms are always open and I'd looove to hear from you !!
          </p>
          <EditionBuyNow theme="light" />
        </Edition>

        {/* First Edition with SignUp and Instagram */}
        <Edition 
          imageSrc="/first edition.jpg"
          title="FIRST EDITION - SOLD OUT (ᗒᗣᗕ)"
          description="the very first edition of seymour is out & about and i'd love for you to have one !!! ⭐️ here's a little sneak peak, but there's lots and lots more to see 🤓🤓 this is a lovely little collection of poetry, prose, arts and farts - anything goes 🦶 it'll look fab on your coffee table xx"
          imageAlt="First Edition Cover"
          theme="light"
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
