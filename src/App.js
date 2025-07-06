import SignUp from "./components/SignUp";
import StripeButton from "./components/StripeButton";

function App() {
  return (
    <div className="App">
      <meta property="og:title" content="Seymour Magazine" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="../public/wallpaper.png" />
      <meta property="og:url" content="https://seymourmagazine.com" />
      <meta name="twitter:card" content="summary_large_image" />

      <h1>Welcome to the Sign Up Page</h1>
      <SignUp />
      <StripeButton />
    </div>
  );
}

export default App;
