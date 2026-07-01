import { useOutletContext } from "react-router";

function WishlistPage() {
  const [wishlistItems] = useOutletContext();

  return (
    <div>
      {wishlistItems.map(data => {
        return (
          <div>{data}</div>
        )
      })}
    </div>
  )
}

export default WishlistPage;