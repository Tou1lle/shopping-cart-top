import styles from "./../../styles/shoppage/ShopFilters.module.css";
import { useFilterData } from "../../utils/dataFetcher";
import { useState } from "react";
import FilterOptions from "./FilterOptions";

function FilterButton({ type, active, onClick }) {
  const baseOption = "All" + " " + type.charAt(0).toUpperCase() + type.slice(1);
  const [option, setOption] = useState(baseOption);
  const { data, loading, error } = useFilterData(type);

  return (
    <div className={styles.relative}>
      <button
        className={`
          ${styles["filter-btn"]}
          ${active ? styles.active : ""}
        `}
        value={type}
        onClick={onClick}
      >
        {option}
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
      <FilterOptions
        data={data}
        loading={loading}
        error={error}
        active={active}
        currentOption={option}
        baseOption={baseOption}
        setOption={(newOption) => setOption(newOption)}
        onClick={onClick}
      />
    </div>
  );
}

export default FilterButton;
