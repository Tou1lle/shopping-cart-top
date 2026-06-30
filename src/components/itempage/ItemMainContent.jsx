import styles from "./../../styles/itempage/ItemPage.module.css";
import { MARKET_TYPES, MARKET_URLS } from "../../utils/constants";
import ItemLeftContent from "./ItemLeftContent";
import ItemRightContent from "./ItemRightContent";

function ItemMainContent({ data, market, setMarket, prices }) {
  return (
    <div className={styles["main-content"]}>
      <ItemLeftContent
        data={data}
        MARKET_TYPES={MARKET_TYPES}
        MARKET_URLS={MARKET_URLS}
      />
      <ItemRightContent
        data={data}
        MARKET_TYPES={MARKET_TYPES}
        market={market}
        setMarket={setMarket}
        prices={prices}
      />
    </div>
  );
}

export default ItemMainContent;
