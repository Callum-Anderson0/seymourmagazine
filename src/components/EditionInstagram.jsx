import FadeContent from "./FadeComponent";

function EditionInstagram() {
  return (
    <FadeContent className="flex flex-col items-center justify-center gap-2" delay={0}>
      <h2 className="text-2xl font-bold text-center text-gray-800">
        LINKS
      </h2>
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
  );
}

export default EditionInstagram; 