import ShopMain from "./ShopMain";
import ShopPagination from "./ShopPagination";
import styles from "./../../styles/shoppage/ShopBody.module.css";
import { useParams } from "react-router";

function ShopBody() {
  const { pageNumber } = useParams();
  const currentPage = Number(pageNumber) || 1;

  return (
    <main className={styles["main-body-shop"]}>
      <ShopMain pageNumber={currentPage} />
      <ShopPagination pageNumber={currentPage} />
    </main>
  );
}

export default ShopBody;
