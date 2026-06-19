import styles from "./../../styles/shoppage/ShopTitle.module.css";

function ShopTitle() {
  return (
    <div className={styles["shop-intro"]}>
      <h1 className={styles["shop-title"]}>Browse catalog</h1>
      <p className={styles["shop-info-text"]}>All data are taken from Pokémon TCG API. It's now part of Scrydex, but these data are still taken from the old docs.</p>
    </div>
  )
}

export default ShopTitle;