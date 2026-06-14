import styles from "./../styles/Header.module.css";
import pokemonLogoURL from "./../assets/images/pokemon-logo.png";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className={styles["body-header"]}>
      <div className={styles["header-image-container"]}>
        <img
          src={pokemonLogoURL}
          alt="Logo of Pokemon"
          className="pokemon-logo header-logo"
        />
      </div>
      <Navigation />
    </header>
  )
}

export default Header;