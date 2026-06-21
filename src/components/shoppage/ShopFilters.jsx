import styles from "./../../styles/shoppage/ShopFilters.module.css";
import FilterSummary from "./FilterSummary";

function ShopFilters({ totalCount }) {
  return (
    <aside className={styles["sidebar"]}>
      <FilterSummary totalCount={totalCount} />
    </aside>
  );
}

export default ShopFilters;
