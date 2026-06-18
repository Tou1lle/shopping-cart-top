import "./../styles/main.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/homepage/Hero";
import WelcomeText from "../components/homepage/WelcomeText";
import PokeballRules from "../components/homepage/PokeballRules";
import ButtonToShop from "../components/homepage/ButtonToShop";
import OutroImage from "../components/homepage/OutroImage";

function App() {
  return (
    <>
      <Header />
      <div className="main-body">
        <Hero />
        <WelcomeText />
        <PokeballRules />
        <ButtonToShop />
        <OutroImage />
      </div>
      <Footer />
    </>
  );
}

export default App;
