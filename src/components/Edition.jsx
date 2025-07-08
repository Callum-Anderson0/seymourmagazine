import SignUp from "./SignUp";

function Edition() {
  return (
    <div className="edition-container p-8 flex flex-col lg:flex-row lg:items-start gap-6">
      {/* Image first on small, right side on large */}
      <img
        src="/first edition.jpg"
        alt="Description"
        className="w-full lg:w-1/2 order-1 lg:order-2 object-cover rounded transform scale-100 z-10"
      />

      {/* Text content */}
      <div className="order-2 lg:order-1 lg:w-1/2 lg:mt-8 flex flex-col justify-between items-stretch gap-8 h-full min-h-[400px] text-gray-800 font-medium">
        <h2 className="text-2xl font-bold self-center">March Edition</h2>
        <p className="flex-1 self-center text-center text-gray-800">
          the very first edition of seymour is out & about and i’d love for you
          to have one !!! ⭐️ here’s a little sneak peak, but there’s lots and
          lots more to see 🤓🤓🤓 dm me to order this lovely little collection
          of poetry, prose, arts and farts - anything goes 🫶 it’ll look fab on
          your coffee table xx
        </p>
        <div className="self-center w-full h-full flex justify-center">
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default Edition;
