import FadeContent from "./FadeComponent";
import SignUp from "./SignUp";

function EditionSignUp() {
  return (
    <FadeContent className="self-center w-full h-full flex justify-center" delay={0}>
      <SignUp />
    </FadeContent>
  );
}

export default EditionSignUp;
