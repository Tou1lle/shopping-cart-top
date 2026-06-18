import "./../styles/main.css";
import Header from "../components/homepage/Header";
import Footer from "../components/homepage/Footer";
import Hero from "../components/homepage/Hero";
import WelcomeText from "../components/homepage/WelcomeText";
import PokeballRules from "../components/homepage/PokeballRules";

function App() {
  return (
    <>
      <Header />
      <div className="main-body">
        <Hero />
        <WelcomeText />
        <PokeballRules />
      </div>
      <Footer />
    </>
  );
}

export default App;
