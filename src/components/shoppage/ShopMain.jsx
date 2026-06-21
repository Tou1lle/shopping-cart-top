import ShopFilters from "./ShopFilters";
import ShopItems from "./ShopItems";

function ShopMain({ pageNumber }) {

  return (
    <div>
      <p style={{ color: "var(--color-text-special)" }}>
        This is ShopMain page number: {pageNumber}
      </p>
      <ShopFilters />
      <ShopItems />
    </div>
  );
}

export default ShopMain;
