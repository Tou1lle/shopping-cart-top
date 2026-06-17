import styles from "./../../styles/Footer.module.css";
import pokemonLogoURL from "./../../assets/images/pokemon-logo.png";
import Navigation from "./NavigationFooter";

function Footer() {
  return (
    <div className={styles["footer-container"]}>
      <footer className={styles.footer}>
        <div className={styles["footer-image-container"]}>
          <img src={pokemonLogoURL} alt="Pokémon logo" />
        </div>
        <div className={styles["footer-content"]}>
          <div className={styles["footer-subscribe"]}>
            <div className={styles["footer-outro"]}>
              <h3>Stay in touch!</h3>
              <p>
                Stay up to date with the latest Pokémon TCG releases , rare card
                drops, restocks, and exclusive offers. Join our community of
                collectors and trainers and never miss the next big pull.
              </p>
            </div>
            <form
              action="#"
              onSubmit={(e) => e.preventDefault()}
              className={styles["form-subscription"]}
            >
              <input type="text" className={styles["email-input"]} />
              <button className={styles["email-submit"]}>SUBMIT</button>
            </form>
          </div>
          <Navigation />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
