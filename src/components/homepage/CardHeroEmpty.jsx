import styles from "/src/styles/homepage/CardHero.module.css";

function CardHeroEmpty() {
  return (
    <div className={styles["card-container"]}>
      <h2 className={styles["card-name"]}>Catching!</h2>
      <div className={styles["card-empty"]}>
        <div className={styles["loading-spinner"]}></div>
      </div>
    </div>
  );
}

export default CardHeroEmpty;
