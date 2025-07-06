import LandingPad from "./components/LandingPad";
import Information from "./components/Information";
import Legal from "./components/Legal";
function App() {
  return (
    <div className="App">
      <meta property="og:title" content="Seymour Magazine" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="../public/wallpaper.png" />
      <meta property="og:url" content="https://seymourmagazine.com" />
      <meta name="twitter:card" content="summary_large_image" />

      <LandingPad />
      <Information />
      <Legal />
    </div>
  );
}

export default App;
