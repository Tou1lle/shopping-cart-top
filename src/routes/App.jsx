import "./../styles/main.css";
import Header from "../components/homepage/Header";
import Footer from "../components/homepage/Footer";
import Hero from "../components/homepage/Hero";
import WelcomeText from "../components/homepage/WelcomeText";

function App() {
  return (
    <>
      <Header />
      <div className="main-body">
        <Hero />
        <WelcomeText />
      </div>
      <Footer />
    </>
  );
}

export default App;
