import ShopTitle from "../components/shoppage/ShopTitle";
import { Outlet } from "react-router";

function Shoppage() {
  return (
    <div className="main-body shoppage">
      <ShopTitle />
      <Outlet />
    </div>
  );
}

export default Shoppage;
