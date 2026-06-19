import styles from "./../styles/Header.module.css";
import pokemonLogoURL from "./../assets/images/pokemon-logo.png";
import Navigation from "./NavigationHeader";
import { Link } from "react-router";

function Header() {
  return (
    <div className={styles["header-container"]}>
      <header className={styles["body-header"]}>
        <div className={styles["header-logo-container"]}>
          <Link to={"/"}>
            <img
              src={pokemonLogoURL}
              alt="Logo of Pokemon"
              className={styles["header-logo"]}
            />
          </Link>
        </div>
        <Navigation />
      </header>
    </div>
  );
}

export default Header;
