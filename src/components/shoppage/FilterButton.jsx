import styles from "./../../styles/shoppage/ShopFilters.module.css";
import { useFilterData } from "../../utils/dataFetcher";

function FilterButton({ type }) {
  const { data, loading, error } = useFilterData(type);
  const baseOption = "All" + " " + type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <button className={styles["filter-btn"]} value={type}>
      {baseOption}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path fill="currentColor" d="M1 3h22L12 22Z" />
      </svg>
    </button>
  );
}

export default FilterButton;
