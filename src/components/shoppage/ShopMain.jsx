import ShopFilters from "./ShopFilters";
import ShopItems from "./ShopItems";

function ShopMain({ pageCards, totalCount, loading }) {
  return (
    <div>
      <ShopFilters totalCount={totalCount} />
      <ShopItems pageCards={pageCards} loading={loading} />
    </div>
  );
}

export default ShopMain;
