import cardBackURL from "./../assets/images/pokemon-card-back.png";
import styles from "./../styles/CardHero.module.css";

function CardHero() {
  return (
    <div className={styles["card-container"]}>
      <h2 className={styles["card-name"]}>Pokemon Name</h2>
      <div>
        <img src={cardBackURL} alt="Pokemon Card" />
      </div>
    </div>
  );
}

export default CardHero;
