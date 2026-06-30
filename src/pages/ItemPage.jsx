import { useLocation, useParams } from "react-router";
import { useItemPokemonData, getLMHPrices } from "../utils/dataFetcher";
import { MARKET_TYPES } from "../utils/constants";
import styles from "./../styles/itempage/ItemPage.module.css";
import { useState } from "react";
import TopNavigation from "../components/itempage/TopNavigation";
import ItemMainContent from "../components/itempage/ItemMainContent";

function ItemPage() {
  const { itemID } = useParams();
  const { data, loading, error } = useItemPokemonData(itemID);
  const [market, setMarket] = useState(MARKET_TYPES[0]);
  const location = useLocation();
  const backTo = location.state?.from ?? "/shop";
  const pageNumber = backTo.split("/").at(-1);
  const prices = data ? getLMHPrices(data, market) : null;

  if (loading) {
    return <div className={styles["loading-page"]}>Loading</div>;
  }

  if (error) {
    return (
      <div className={styles["error-page"]}>
        A network error must have been caught:/
      </div>
    );
  }

  return (
    <div className={`main-body itempage ${styles["item-page"]}`}>
      <TopNavigation backTo={backTo} pageNumber={pageNumber} data={data} />
      <ItemMainContent
        data={data}
        market={market}
        setMarket={setMarket}
        prices={prices}
      />
    </div>
  );
}

export default ItemPage;
