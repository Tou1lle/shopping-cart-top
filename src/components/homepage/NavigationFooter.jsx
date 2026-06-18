import styles from "/src/styles/Footer.module.css";
import { Link } from "react-router";

function Navigation() {
  return (
    <div className={styles["footer-interactive"]}>
      <div className={styles["footer-links"]}>
        <h3>Shop</h3>
        <nav>
          <Link className={`link ${styles.link}`}>Starter Pack</Link>
          <Link className={`link ${styles.link}`}>Rare Sets</Link>
          <Link className={`link ${styles.link}`}>I Choose You!</Link>
        </nav>
      </div>
      <div className={styles["footer-links"]}>
        <h3>Customer Service</h3>
        <nav>
          <Link className={`link ${styles.link}`}>Shipping Information</Link>
          <Link className={`link ${styles.link}`}>Return & Refunds</Link>
          <Link className={`link ${styles.link}`}>FAQ</Link>
          <Link className={`link ${styles.link}`}>Contact</Link>
        </nav>
      </div>
      <div className={styles["footer-links"]}>
        <h3>About</h3>
        <nav>
          <Link className={`link ${styles.link}`}>Our Story</Link>
          <Link className={`link ${styles.link}`}>Blog</Link>
          <Link className={`link ${styles.link}`}>Our Favorite Decks</Link>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
