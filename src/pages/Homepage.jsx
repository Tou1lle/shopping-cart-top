import Hero from "../components/homepage/Hero";
import WelcomeText from "../components/homepage/WelcomeText";
import PokeballRules from "../components/homepage/PokeballRules";
import ButtonToShop from "../components/homepage/ButtonToShop";
import OutroImage from "../components/homepage/OutroImage";

function Homepage() {
  return (
    <div className="main-body homepage">
      <Hero />
      <WelcomeText />
      <PokeballRules />
      <ButtonToShop />
      <OutroImage />
    </div>
  )
}

export default Homepage;