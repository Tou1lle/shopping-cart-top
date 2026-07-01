import styles from "./../../styles/itempage/ItemPage.module.css";
import { getCardPrice } from "../../utils/dataFetcher";
import tcgplayerLogo from "./../../assets/images/tcgplayer-logo.png";
import cardmarketLogo from "./../../assets/images/cardmarket-logo.png";
import { useOutletContext } from "react-router";

function ItemRightContent({ data, MARKET_TYPES, market, setMarket, prices }) {
  const [wishlistItems, setWishlistItems] = useOutletContext();

  const logoURLs = {
    [MARKET_TYPES[0]]: tcgplayerLogo,
    [MARKET_TYPES[1]]: cardmarketLogo,
  };

  return (
    <div className={styles["right-side"]}>
      <div className={styles["right-basic-info"]}>
        <h1 className={styles["right-header"]}>
          <span className={styles["right-h1-name"]}>{data.name}</span>&nbsp;
          <span className={styles["right-h1-id"]}>#{data.id}</span>
        </h1>
        <section className={styles["right-info-container"]}>
          <div className={styles["right-info-detail"]}>
            <p>Supertype</p>
            <p>{data.supertype}</p>
          </div>
          <div className={styles["right-info-detail"]}>
            <p>Subtype</p>
            <p>
              {data.subtypes.map((subtype, index) => {
                return index === data.subtypes.length - 1
                  ? `${subtype}`
                  : `${subtype}, `;
              })}
            </p>
          </div>
          <div className={styles["right-info-detail"]}>
            <p>Type</p>
            <p>
              {data.types.map((type, index) => {
                return index === data.types.length - 1
                  ? `${type}`
                  : `${type}, `;
              })}
            </p>
          </div>
        </section>
        <div className={styles["pokemon-flavor-text"]}>
          <p>"{data.flavorText}"</p>
        </div>
      </div>
      <div className={styles["right-market-prices"]}>
        <h2 className={styles["right-market-header"]}>Market Prices</h2>
        <div className={styles["right-market-btns-container"]}>
          {MARKET_TYPES.map((marketType) => {
            return (
              <div
                key={marketType}
                className={`
                  ${styles["right-market-btn"]}
                  ${market === marketType ? styles["active-market"] : ""}
                  `}
                onClick={() => {
                  setMarket(marketType);
                }}
              >
                <p>
                  <span className={styles["right-market-type"]}>
                    {marketType === MARKET_TYPES[0]
                      ? marketType.slice(0, 4).toUpperCase() +
                        marketType.slice(4)
                      : marketType.charAt(0).toUpperCase() +
                        marketType.slice(1)}
                  </span>
                  <span className={styles["right-market-type-price"]}>
                    {marketType === MARKET_TYPES[0] ? "$USD" : "€EUR"}
                  </span>
                </p>
                <img src={logoURLs[marketType]} alt="Market logo" />
              </div>
            );
          })}
        </div>
        <section className={styles["lmh-prices-container"]}>
          <div className={styles["lmh-price"]}>
            <span>Low</span>
            <span>
              {prices ? prices.low : "N/A"}&nbsp;
              {market === MARKET_TYPES[0] ? "$" : "€"}
            </span>
          </div>
          <div className={styles["lmh-price"]}>
            <span>Mid</span>
            <span>
              {prices ? prices.mid : "N/A"}&nbsp;
              {market === MARKET_TYPES[0] ? "$" : "€"}
            </span>
          </div>
          <div className={styles["lmh-price"]}>
            <span>High</span>
            <span>
              {prices ? prices.high : "N/A"}&nbsp;
              {market === MARKET_TYPES[0] ? "$" : "€"}
            </span>
          </div>
        </section>
        <div className={styles["card-final-price"]}>
          <p>
            <span>YOUR PRICE:</span>&nbsp;
            <span>
              {getCardPrice(data, market)}&nbsp;
              {market === MARKET_TYPES[0] ? "$" : "€"}
            </span>
          </p>
        </div>
      </div>
      <div className={styles["right-btns-container"]}>
        <button 
          className={`${styles["btn-wishlist"]}`}
          onClick={() => {
            if (wishlistItems.includes(data.id)) {
              alert("Already in wishlist!");
              return;
            }
            const copy = wishlistItems.slice();
            copy.push(data.id);
            setWishlistItems(copy);
          }}
        >
          Add to wishlist
        </button>
        <button className={`${styles["btn-cart"]}`}>Add to cart</button>
      </div>
    </div>
  );
}

export default ItemRightContent;
