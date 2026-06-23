import { getCardPrice } from "../../utils/dataFetcher";

function CardShopItem({ card }) {
  return (
    <div>
      <div>
        <img src={card.images.small} alt="" />
      </div>
      <div>
        <div>
          <h2>{card.name}</h2>
          <p>{card.supertype}</p>
        </div>
        <div>
          <p>{card.rarity}</p>
          <p>{getCardPrice(card)}</p>
        </div>
      </div>
    </div>
  )
}

export default CardShopItem;
