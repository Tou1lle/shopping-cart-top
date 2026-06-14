import "./../styles/main.css"
import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="main" style={{flexGrow: 1}}>Content</div>
      <Footer />
    </>
  )
}

export default App;