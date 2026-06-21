import { useParams } from "react-router";
import ShopFilters from "./ShopFilters";
import ShopItems from "./ShopItems";

function ShopMain() {
  const { pageNumber } = useParams();

  return (
    <div>
      <p style={{color: "var(--color-text-special)"}}>This is ShopMain page number: {pageNumber}</p>
      <ShopFilters />
      <ShopItems />
    </div>
  )
}

export default ShopMain;