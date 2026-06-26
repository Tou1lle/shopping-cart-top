import { getCardPrice } from "../../utils/dataFetcher";
import { Link, useLocation } from "react-router";
import { MARKET_TYPES } from "../../utils/constants";
import styles from "./../../styles/shoppage/ShopItems.module.css";

function CardShopItem({ card, market }) {
  const location = useLocation();

  return (
    <Link
      to={"/item/" + card.id}
      state={{ from: location.pathname }}
      className={`link ${styles["card-link"]}`}
    >
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
            <p className={styles["card-price"]}>
              {(market === MARKET_TYPES[0] ? "$" : "€") +
                getCardPrice(card, market)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardShopItem;
