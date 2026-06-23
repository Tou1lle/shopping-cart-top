import styles from "./../../styles/shoppage/ShopItems.module.css";
import CardShopItem from "./CardShopItem";

function ShopItems({ pageCards, loading }) {
  if (loading) {
    return (
      <div className={styles["loading-container"]}>
        <p className={styles["loading-text"]}>Catching & Fetching</p>
      </div>
    );
  }

  return (
    <div className={styles["cards-container"]}>
      {pageCards.map((card) => {
        return <CardShopItem key={card.id} card={card} />;
      })}
    </div>
  );
}

export default ShopItems;
