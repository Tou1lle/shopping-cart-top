import { useEffect, useState } from "react"
import { BASE_API_CARDS, API_KEY } from "./constants";

const PAGE_SIZE = 25;

const usePagePokemonData = (pageNumber = 1) => {
  const [data, setData] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pageAPI = Math.ceil(pageNumber / 10);
    const params = new URLSearchParams({ page: pageAPI });
    const sliceStart = (((pageNumber - 1) % 10) * PAGE_SIZE);
    const sliceEnd = sliceStart + PAGE_SIZE;

    fetch(BASE_API_CARDS + `?${params}`, {
      headers: {
        "X-API-Key": API_KEY
      }
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then(data => {
        const pageCards = data.data.slice(sliceStart, sliceEnd);
        setData(pageCards);
        setTotalCount(data.totalCount);
        console.log(pageCards);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [pageNumber]);

  return {
    data,
    error,
    loading,
    totalCount
  }
}

/*
const useTopCards = (limit = 3) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  fetch(BASE_API_CARDS + `?${params}`, {
    headers: {
      "X-API-Key": API_KEY
    }
  })
    .then(response => {
      if (response.status >= 400) {
        throw new Error("server error");
      }
      return response.json();
    })
    .then(data => {
      const cards = data.data;
    })
}
*/

const getYourPrice = (card, marketType = "tcgplayer") => {
  if (!card[marketType]) {
    return "Price NOT Available:(";
  }

  const prices = marketType.includes("tcg") === true ? (card[marketType].prices[Object.keys(card[marketType].prices)[0]]) : card[marketType].prices;
  const sum = Object.values(prices).filter(price => price !== null).reduce((acc, num) => acc + num, 0);
  const yourPrice = (sum / Object.values(prices).filter(price => price !== null).length).toFixed(2);

  return yourPrice;
}

export { usePagePokemonData, getYourPrice }