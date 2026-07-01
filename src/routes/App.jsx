import "./../styles/main.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { useState } from "react";

function App() {
  const [wishlistItems, setWishlistItems] = useState([]);

  return (
    <>
      <Header />
      <Outlet context={[wishlistItems, setWishlistItems]}/>
      <Footer />
    </>
  );
}

export default App;
