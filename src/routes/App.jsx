import "./../styles/main.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import WelcomeText from "../components/WelcomeText";

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
