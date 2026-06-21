import styles from "./../../styles/shoppage/ShopFilters.module.css";
import FilterSummary from "./FilterSummary";
import FilterButton from "./FilterButton";

function ShopFilters({ totalCount }) {
  return (
    <aside className={styles["sidebar"]}>
      <FilterSummary totalCount={totalCount} />
      <div className={styles["sidebar-filters"]}>
        <FilterButton type="types" />
        <FilterButton type="supertypes" />
        <FilterButton type="subtypes" />
        <FilterButton type="rarities" />
      </div>
    </aside>
  );
}

export default ShopFilters;
