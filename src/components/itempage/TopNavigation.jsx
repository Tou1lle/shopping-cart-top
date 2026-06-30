import { Link } from "react-router";
import styles from "./../../styles/itempage/ItemPage.module.css";

function TopNavigation({ backTo, pageNumber, data }) {
  return (
    <div className={styles["top-navigation"]}>
      <Link to={backTo} className={`link ${styles["nav-back"]}`}>
        Shop page {!!Number(pageNumber) && pageNumber}
      </Link>{" "}
      <svg
        className={styles["nav-split"]}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          fill="currentColor"
          d="m18.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15a1 1 0 0 0-.15 1.41L16.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 13 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27"
        />
        <path
          fill="currentColor"
          d="M7 5.37a1 1 0 0 0-1.61 1.26L9.71 12l-4.48 5.36a1 1 0 0 0 .13 1.41A1 1 0 0 0 6 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 0-1.27Z"
        />
      </svg>
      <p className={styles["nav-pokemon"]}>
        <span>{data.name}</span>
        <span>&nbsp;#{data.id}</span>
      </p>
    </div>
  );
}

export default TopNavigation;
