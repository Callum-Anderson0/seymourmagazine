export default function StripeButton() {
  const handleClick = () => {
    window.location.href =
      "https://buy.stripe.com/test_eVq7sE1DAe0b1f01YFdnW00";
  };

  return (
    <button
      className="w-full flex justify-center bg-gray-800 text-white hover:bg-gray-700 transition-colors rounded-full py-2 px-8 font-semibold"
      onClick={handleClick}
    >
      🌀 GET YOUR COPY HERE 🌀
    </button>
  );
}
