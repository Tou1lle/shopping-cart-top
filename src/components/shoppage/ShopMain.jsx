import { useState } from "react";
import styles from "./../../styles/shoppage/ShopBody.module.css";
import ShopFilters from "./ShopFilters";
import ShopItems from "./ShopItems";

function ShopMain({ pageCards, totalCount, loading }) {
  const markets = ["tcgplayer", "cardmarket"];
  const [market, setMarket] = useState(markets[0]);

  const changeMarket = () => {
    setMarket(market === markets[0] ? markets[1] : markets[0]);
  }

  return (
    <div className={styles["main-shop"]}>
      <ShopFilters totalCount={totalCount} market={market} changeMarket={changeMarket}/>
      <ShopItems pageCards={pageCards} loading={loading} market={market}/>
    </div>
  );
}

export default ShopMain;
