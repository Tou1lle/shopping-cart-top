import ShopMain from "./ShopMain";
import ShopPagination from "./ShopPagination";
import styles from "./../../styles/shoppage/ShopBody.module.css";
import { useParams } from "react-router";
import { usePagePokemonData, useTotalCount } from "../../utils/dataFetcher";

function ShopBody() {
  const { pageNumber } = useParams();
  const currentPage = Number(pageNumber) || 1;
  const { data, loading, error, totalCountData } =
    usePagePokemonData(currentPage);
  const { totalCount, countLoading } = useTotalCount();

  if (error) {
    return <div>A network error was encountered</div>;
  }

  return (
    <main className={styles["main-body-shop"]}>
      <ShopMain
        pageNumber={currentPage}
        pageCards={data}
        totalCount={totalCountData}
        loading={loading}
      />
      <ShopPagination
        pageNumber={currentPage}
        totalCount={totalCount}
        loading={countLoading}
      />
    </main>
  );
}

export default ShopBody;
