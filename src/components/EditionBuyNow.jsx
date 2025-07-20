import FadeContent from "./FadeComponent";
import Button from "./Button";

function EditionBuyNow({ onClick }) {
  return (
    <FadeContent className="self-center w-full h-full flex justify-center" delay={0}>
      <Button onClick={onClick || (() => console.log('Buy Now clicked'))}>
        BUY NOW
      </Button>
    </FadeContent>
  );
}

export default EditionBuyNow; 