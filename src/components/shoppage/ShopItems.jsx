import CardShopItem from "./CardShopItem";

function ShopItems({ pageCards, loading }) {
  if (loading) {
    return <div>Catching & Fetching</div>;
  }

  return (
    <div>
      {pageCards.map((card) => {
        return <CardShopItem card={card} />
      })}
    </div>
  );
}

export default ShopItems;
