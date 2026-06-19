import styles from "./../styles/errorpage/Errorpage.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";

function Errorpage() {
  return (
    <>
      <Header />
      <div className="main-body errorpage">
        <h1 className={styles["error-heading"]}>Error</h1>
        <p className={styles["error-paragraph"]}>
          It seems like you have lost your way:(
        </p>
        <Link to={"/"} className={`link ${styles["error-link"]}`}>
          &#8594; Go back to Homepage &#8592;
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Errorpage;
