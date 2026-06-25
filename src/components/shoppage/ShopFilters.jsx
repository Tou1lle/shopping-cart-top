import styles from "./../../styles/shoppage/ShopFilters.module.css";
import FilterSummary from "./FilterSummary";
import FilterButton from "./FilterButton";
import { FILTER_TYPES } from "../../utils/constants";
import { useState } from "react";
import { MARKET_TYPES } from "../../utils/constants";

function ShopFilters({ totalCount, market, changeMarket }) {
  const [active, setActive] = useState(null);

  return (
    <aside className={styles["sidebar"]}>
      <button
        value={market}
        onClick={changeMarket}
        className={`${styles["market-btn"]} ${styles[(market === MARKET_TYPES[0] ? MARKET_TYPES[0] : MARKET_TYPES[1]) + "-container"]}`}
      >
        <span
          className={`
            ${styles["span-market"]}
            ${styles[market === MARKET_TYPES[0] ? MARKET_TYPES[0] : "inactive-market"]} 
            ${styles[market === MARKET_TYPES[0] ? "active-market" : "inactive-market"]}`}
        >
          TCGPlayer
        </span>
        |
        <span
          className={`
            ${styles["span-market"]}
            ${styles[market === MARKET_TYPES[1] ? MARKET_TYPES[1] : "inactive-market"]} 
            ${styles[market === MARKET_TYPES[1] ? "active-market" : "inactive-market"]}`}
        >
          Cardmarket
        </span>
        <span
          className={styles["btn-bg"]}
          style={market === MARKET_TYPES[0] ? { left: "0" } : { left: "50%" }}
        ></span>
      </button>
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
    </aside>
  );
}

export default ShopFilters;
