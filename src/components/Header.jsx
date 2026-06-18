import styles from "/src/styles/Header.module.css";
import pokemonLogoURL from "/src/assets/images/pokemon-logo.png";
import Navigation from "./homepage/NavigationHeader";

function Header() {
  return (
    <div className={styles["header-container"]}>
      <header className={styles["body-header"]}>
        <div className={styles["header-logo-container"]}>
          <img
            src={pokemonLogoURL}
            alt="Logo of Pokemon"
            className={styles["header-logo"]}
          />
        </div>
        <Navigation />
      </header>
    </div>
  );
}

export default Header;
