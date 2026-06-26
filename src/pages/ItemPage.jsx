import { useLocation, useParams, Link } from "react-router";
import { useItemPokemonData } from "../utils/dataFetcher";
import styles from "./../styles/itempage/ItemPage.module.css";

function ItemPage() {
  const { itemID } = useParams();
  const { data, loading, error } = useItemPokemonData(itemID);
  const location = useLocation();
  const backTo = location.state?.from ?? "/shop";
  const pageNumber = backTo.split("/").at(-1);

  if (loading) {
    return (
      <div className={styles["loading-page"]}>Loading</div>
    )
  }

  if (error) {
    return (
      <div className={styles["error-page"]}>A network error must have been caught:/</div>
    )
  }

  return (
    <div className="main-body itempage">
      <div><Link to={backTo}>Shop page {!!Number(pageNumber) && pageNumber}</Link></div>
      <div>
        <div>{data.id}</div>
        <div>{data.name}</div>
      </div>
    </div>
  )
}

export default ItemPage;