import styles from "./../../styles/homepage/ButtonToShop.module.css";
import { Link } from "react-router";

function ButtonToShop() {
  return (
    <Link
      to={"shop"}
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
