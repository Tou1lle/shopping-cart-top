function ShopItems({ pageCards, loading }) {
  if (loading) {
    return <div>Loading Cards.</div>;
  }

  return <div>{pageCards.map((card) => card.name)}</div>;
}

export default ShopItems;
