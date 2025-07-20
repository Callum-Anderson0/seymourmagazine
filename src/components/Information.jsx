import Edition from "./Edition";

// Edition data - you can move this to a separate file if you prefer
const editions = [
  
  // Add your second edition here:
  {
    id: 1,
    imageSrc: "/second edition.png",
    title: "SECOND EDITION - COMING SOON",
    description: "the second edition of SEYMOUR is coming soon !! get ready for more artists, more writers, and more good energy 🤠 keep your eyes on the seymour instagram for updates and release date !! ☆ ☆ ☆ love ya xx",
    showInstagram: false,
    showBuyNow: true, // Set to true when ready to sell
    showSignUp: false, // Set to false if you don't want signup for this edition
    imageAlt: "Second Edition Cover"
  },
  {
    id: 2,
    imageSrc: "/first edition.jpg",
    title: "FIRST EDITION - SOLD OUT (ᗒᗣᗕ)",
    description: "the very first edition of seymour is out & about and i'd love for you to have one !!! ⭐️ here's a little sneak peak, but there's lots and lots more to see 🤓🤓 this is a lovely little collection of poetry, prose, arts and farts - anything goes 🦶 it'll look fab on your coffee table xx",
    showInstagram: true,
    showBuyNow: false,
    showSignUp: true,
    imageAlt: "First Edition Cover"
  },
];

function Information() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-1 md:p-8">
      <div className="w-full mx-auto space-y-6">
        {editions.map(edition => (
          <Edition key={edition.id} {...edition} />
        ))}
      </div>
    </div>
  );
}

export default Information;
