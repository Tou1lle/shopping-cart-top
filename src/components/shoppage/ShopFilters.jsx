import styles from "./../../styles/shoppage/ShopFilters.module.css";
import FilterSummary from "./FilterSummary";
import FilterButton from "./FilterButton";
import { FILTER_TYPES } from "../../utils/constants";
import { useState } from "react";

function ShopFilters({ totalCount, market, changeMarket }) {
  const [active, setActive] = useState(null);

  return (
    <aside className={styles["sidebar"]}>
      <div>
        <FilterSummary totalCount={totalCount} />
        <div className={styles["sidebar-filters"]}>
          {FILTER_TYPES.map((type) => (
            <FilterButton
              key={type}
              type={type}
              active={active === type}
              onClick={() => setActive(active === type ? null : type)}
            />
          ))}
        </div>
      </div>
      <button value={market} onClick={changeMarket}>TCGPlayer / Cardmarket</button>
    </aside>
  );
}

export default ShopFilters;
