import ShopMain from "./ShopMain";
import ShopPagination from "./ShopPagination";
import styles from "./../../styles/shoppage/ShopBody.module.css";

function ShopBody() {
  return (
    <main className={styles["main-body-shop"]}>
      <ShopMain />
      <ShopPagination />
    </main>
  );
}

export default ShopBody;
