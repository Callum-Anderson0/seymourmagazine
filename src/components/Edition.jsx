import FadeContent from "./FadeComponent";
import SignUp from "./SignUp";

function Edition() {
  return (
    <div className="edition-container p-0 md:p-8 flex flex-col md:flex-row md:items-start gap-6">
      {/* Image first on small, right side on large */}
      <div className="w-full md:w-1/2 order-1 md:order-2 flex">
        <FadeContent className="w-full">
          <img
            src="/first edition.jpg"
            alt="Description"
            className="w-full object-cover rounded transform scale-100 z-10"
          />
        </FadeContent>
      </div>

      {/* Text content */}
      <div className="order-2 md:order-1 md:w-1/2 md:mt-8 flex flex-col justify-between items-stretch md:gap-4 h-full min-h-[400px] text-gray-800 font-medium">
        <FadeContent className="flex justify-center" delay={0}>
          <h2 className="text-2xl font-bold text-center">MARCH EDITION</h2>
        </FadeContent>
        <FadeContent className="" delay={0}>
          <p className="flex-1 self-center text-center text-gray-800">
            the very first edition of seymour is out & about and i’d love for
            you to have one !!! ⭐️ here’s a little sneak peak, but there’s lots
            and lots more to see 🤓🤓🤓 dm me to order this lovely little
            collection of poetry, prose, arts and farts - anything goes 🫶 it’ll
            look fab on your coffee table xx
          </p>
        </FadeContent>
        <FadeContent
          className="self-center w-full h-full flex justify-center"
          delay={0}
        >
          <SignUp />
        </FadeContent>
        <FadeContent
          className="flex flex-col items-center justify-center gap-2"
          delay={0}
        >
          <h2 className="text-center text-gray-800 font-bold text-lg">LINKS</h2>
          <a
            href="https://www.instagram.com/seymourmagazine/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Seymour Magazine Instagram"
            className="mt-2 flex justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-pink-400 hover:text-pink-600 transition-colors"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.62a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z" />
            </svg>
          </a>
        </FadeContent>
      </div>
    </div>
  );
}

export default Edition;
