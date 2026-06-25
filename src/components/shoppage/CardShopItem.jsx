import { getCardPrice } from "../../utils/dataFetcher";
import { Link } from "react-router";
import styles from "./../../styles/shoppage/ShopItems.module.css";

function CardShopItem({ card, market }) {
  return (
    <Link className={`link ${styles["card-link"]}`}>
      <div className={styles["card-container"]}>
        <div className={styles["card-img-container"]}>
          <img src={card.images.small} alt="Pokémon card" />
        </div>
        <div className={styles["card-info-container"]}>
          <div className={styles["card-main-info"]}>
            <h2 className={styles["card-name"]}>{card.name}</h2>
            <p className={styles["card-supertype"]}>{card.supertype}</p>
          </div>
          <div className={styles["card-secondary-info"]}>
            <p className={styles["card-rarity"]}>{card.rarity}</p>
            <p className={styles["card-price"]}>{(market === "tcgplayer" ? "$" : "€") + getCardPrice(card, market)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardShopItem;
