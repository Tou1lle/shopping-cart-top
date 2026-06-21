import ShopFilters from "./ShopFilters";
import ShopItems from "./ShopItems";

function ShopMain() {
  return (
    <div>
      <p style={{color: "var(--color-text-special)"}}>This is ShopMain</p>
      <ShopFilters />
      <ShopItems />
    </div>
  )
}

export default ShopMain;