import styles from "./../../styles/shoppage/ShopFilters.module.css";

function FilterSummary({ totalCount }) {
  return (
    <div className={styles["filter-summary"]}>
      <button className={styles["clear-btn"]}>
        &#x2717; Clear All Filters
      </button>
      <p className={styles["summary-info"]}>{totalCount || "...."} results</p>
    </div>
  );
}

export default FilterSummary;
