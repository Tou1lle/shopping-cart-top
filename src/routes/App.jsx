import "./../styles/main.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import Homepage from "../pages/Homepage";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
