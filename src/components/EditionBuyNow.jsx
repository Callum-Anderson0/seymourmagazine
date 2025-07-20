import FadeContent from "./FadeComponent";
import Button from "./Button";

function EditionBuyNow({ onClick, theme = "dark" }) {
  return (
    <FadeContent className="self-center w-full h-full flex justify-center" delay={0}>
      <Button onClick={onClick || (() => console.log('Buy Now clicked'))} theme={theme}>
        BUY NOW
      </Button>
    </FadeContent>
  );
}

export default EditionBuyNow; 