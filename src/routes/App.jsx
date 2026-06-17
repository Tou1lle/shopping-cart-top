import "./../styles/main.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FetchingTester from "../FetchingTester";

function App() {
  return (
    <>
      <Header />
      <div className="main-body">
        <Hero />
        <FetchingTester />
      </div>
      <Footer />
    </>
  );
}

export default App;
