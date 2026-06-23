import styles from "./../../styles/shoppage/ShopBody.module.css";
import ShopFilters from "./ShopFilters";
import ShopItems from "./ShopItems";

function ShopMain({ pageCards, totalCount, loading }) {
  return (
    <div className={styles["main-shop"]}>
      <ShopFilters totalCount={totalCount} />
      <ShopItems pageCards={pageCards} loading={loading} />
    </div>
  );
}

export default ShopMain;
