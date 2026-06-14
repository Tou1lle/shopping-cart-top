import styles from "./../styles/Footer.module.css";
import pokemonLogoURL from "./../assets/images/pokemon-logo.png";
import { Link } from "react-router";


function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-image-container"]}>
        <img src={pokemonLogoURL} alt="Pokémon logo" />
      </div>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-subscribe"]}>
          <div>
            <h3>Stay in touch!</h3>
            <p>Stay up to date with the latest Pokémon TCG releases
              , rare card drops, restocks, and exclusive offers.
              Join our community of collectors and trainers and never miss the next big pull.
            </p>
          </div>
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <input type="text" />
            <button>SUBMIT</button>
          </form>
        </div>
        <div className={styles["footer-links"]}>
          <div>
            <h3>Shop</h3>
            <nav>
              <Link className={`link`}>Starter Pack</Link>
              <Link className={`link`}>Rare Sets</Link>
              <Link className={`link`}>I Choose You!</Link>
            </nav>
          </div>
          <div>
            <h3>Customer Service</h3>
            <nav>
              <Link className={`link`}>Shipping Information</Link>
              <Link className={`link`}>Return & Refunds</Link>
              <Link className={`link`}>FAQ</Link>
              <Link className={`link`}>Contact</Link>
            </nav>
          </div>
          <div>
            <h3>About</h3>
            <nav>
              <Link className={`link`}>Our Story</Link>
              <Link className={`link`}>Blog</Link>
              <Link className={`link`}>Our Favorite Decks</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;