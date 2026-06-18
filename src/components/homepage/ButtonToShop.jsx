import styles from "/src/styles/homepage/ButtonToShop.module.css";
import { Link } from "react-router";

function ButtonToShop() {
  return (
    <Link
      className={`
      link
      ${styles["link-btn-shop"]}
    `}
    >
      Browse shop
    </Link>
  );
}

export default ButtonToShop;
