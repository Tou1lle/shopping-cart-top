import "./../styles/main.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FetchingTester from "../FetchingTester";

function App() {
  return (
    <>
      <Header />
      <div className="main" style={{ flexGrow: 1 }}>
        <FetchingTester />
      </div>
      <Footer />
    </>
  );
}

export default App;
