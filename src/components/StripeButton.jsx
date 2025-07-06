export default function StripeButton() {
  const handleClick = () => {
    window.location.href = 'https://buy.stripe.com/test_eVq7sE1DAe0b1f01YFdnW00';
  };

  return (
    <button onClick={handleClick}>
      Buy Now
    </button>
  );
}