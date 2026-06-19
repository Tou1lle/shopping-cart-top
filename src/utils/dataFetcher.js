import { useEffect, useState } from "react";
import { BASE_API_CARDS, BASE_API, API_KEY } from "./constants";
import { sampleSize } from "lodash";

const PAGE_SIZE = 25;

const usePagePokemonData = (pageNumber = 1) => {
  const [data, setData] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pageAPI = Math.ceil(pageNumber / 10);
    const params = new URLSearchParams({ page: pageAPI });
    const sliceStart = ((pageNumber - 1) % 10) * PAGE_SIZE;
    const sliceEnd = sliceStart + PAGE_SIZE;

    fetch(BASE_API_CARDS + `?${params}`, {
      headers: {
        "X-API-Key": API_KEY,
      },
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => {
        const pageCards = data.data.slice(sliceStart, sliceEnd);
        setData(pageCards);
        setTotalCount(data.totalCount);
        console.log(pageCards);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [pageNumber]);

  return {
    data,
    error,
    loading,
    totalCount,
  };
};

const useTopCards = (limit = 3) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BASE_API_CARDS, {
      headers: {
        "X-API-Key": API_KEY,
      },
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => {
        const cards = data.data;
        const topCards = sampleSize(cards, limit);
        setData(topCards);
        console.log(topCards);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [limit]);

  return {
    data,
    loading,
    error,
  };
};

const useFilterData = (type) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BASE_API + `/${type}`, {
      headers: {
        "X-API-Key": API_KEY,
      },
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => {
        const filters = data.data;
        console.log(filters);
        setData(filters);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [type]);

  return {
    data,
    error,
    loading,
  };
};


const getYourPrice = (card, marketType = "tcgplayer") => {
  if (!card[marketType]) {
    return "Price NOT Available:(";
  }

  const prices =
    marketType.includes("tcg") === true
      ? card[marketType].prices[Object.keys(card[marketType].prices)[0]]
      : card[marketType].prices;
  const sum = Object.values(prices)
    .filter((price) => price !== null)
    .reduce((acc, num) => acc + num, 0);
  const yourPrice = (
    sum / Object.values(prices).filter((price) => price !== null).length
  ).toFixed(2);

  return yourPrice;
};

export { usePagePokemonData, useTopCards, useFilterData, getYourPrice };
