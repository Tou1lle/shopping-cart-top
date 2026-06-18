import cardBackURL from "./../../assets/images/pokemon-card-back.png";
import styles from "./../../styles/homepage/CardHero.module.css";

function CardHero({ pokemon }) {
  return (
    <div className={styles["card-container"]}>
      <h2 className={styles["card-name"]}>{pokemon.name}</h2>
      <div className={styles["card-image-container"]}>
        <img
          src={cardBackURL}
          className={styles["card-image-back"]}
          alt="Pokemon Card Back"
          onClick={(e) => {
            e.currentTarget.style.transform = "translateY(-150%)";
          }}
        />
        <img src={pokemon.images.large} alt="Pokemon Card Front" />
      </div>
    </div>
  );
}

export default CardHero;
