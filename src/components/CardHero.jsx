import cardBackURL from "./../assets/images/pokemon-card-back.png";
import cardFrontURL from "./../assets/images/pokemon-card-front.png";
import styles from "./../styles/CardHero.module.css";

function CardHero() {
  if (!true) {
    return (
      <div className={styles["card-container"]}>
      </div>
    )
  }

  return (
    <div className={styles["card-container"]}>
      <h2 className={styles["card-name"]}>Pokemon Name</h2>
      <div className={styles["card-image-container"]}>
        <img
          src={cardBackURL}
          className={styles["card-image-back"]}
          alt="Pokemon Card Back"
          onClick={(e) => {
            e.currentTarget.style.transform = "translateY(-150%)";
          }}
        />
        <img src={cardFrontURL} alt="Pokemon Card Front" />
      </div>
    </div>
  );
}

export default CardHero;
