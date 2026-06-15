import "./../styles/main.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function App() {
  return (
    <>
      <Header />
      <div className="main-body">
        <Hero />
      </div>
      <Footer />
    </>
  );
}

export default App;
