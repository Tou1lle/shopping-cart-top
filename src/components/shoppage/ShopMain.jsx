import { useState } from "react";
import { MARKET_TYPES } from "../../utils/constants";
import styles from "./../../styles/shoppage/ShopBody.module.css";
import ShopFilters from "./ShopFilters";
import ShopItems from "./ShopItems";

function ShopMain({ pageCards, totalCount, loading }) {
  const [market, setMarket] = useState(MARKET_TYPES[0]);

  const changeMarket = () => {
    setMarket(market === MARKET_TYPES[0] ? MARKET_TYPES[1] : MARKET_TYPES[0]);
  };

  return (
    <div className={styles["main-shop"]}>
      <ShopFilters
        totalCount={totalCount}
        market={market}
        changeMarket={changeMarket}
      />
      <ShopItems pageCards={pageCards} loading={loading} market={market} />
    </div>
  );
}

export default ShopMain;
