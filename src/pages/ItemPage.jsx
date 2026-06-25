import { useParams } from "react-router";
import styles from "./../styles/itempage/ItemPage.module.css";

function ItemPage() {
  const { itemID } = useParams();

  return (
    <div className="main-body itempage">
      {itemID}
    </div>
  )
}

export default ItemPage;