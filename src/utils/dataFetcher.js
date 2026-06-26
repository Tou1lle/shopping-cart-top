import { useEffect, useState } from "react";
import {
  BASE_API_CARDS,
  BASE_API,
  API_KEY,
  PAGE_SIZE,
  MARKET_TYPES,
} from "./constants";
import { sampleSize } from "lodash";

const usePagePokemonData = (pageNumber = 1) => {
  const [data, setData] = useState(null);
  const [totalCountData, setTotalCount] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pageAPI = Math.ceil(pageNumber / 10);
    const params = new URLSearchParams({ page: pageAPI });
    const sliceStart = ((pageNumber - 1) % 10) * PAGE_SIZE;
    const sliceEnd = sliceStart + PAGE_SIZE;
    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true);
    setError(null);

    fetch(BASE_API_CARDS + `?${params}`, {
      headers: {
        "X-API-Key": API_KEY,
      },
      signal,
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
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setError(error);
        }
      })
      .finally(() => {
        if (!signal.aborted) {
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, [pageNumber]);

  return {
    data,
    error,
    loading,
    totalCountData,
  };
};

const useTotalCount = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [countError, setCountError] = useState(null);
  const [countLoading, setCountLoading] = useState(true);

  useEffect(() => {
    setCountError(null);
    setCountLoading(true);

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
      .then((data) => setTotalCount(data.totalCount))
      .catch((error) => setCountError(error))
      .finally(() => setCountLoading(false));
  }, []);

  return {
    totalCount,
    countError,
    countLoading,
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

const useItemPokemonData = (pokemonID) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useState(() => {
    setError(null);
    setLoading(true);

    fetch(BASE_API_CARDS + "/" + pokemonID, {
      headers: {
        "X-API-Key": API_KEY,
      },
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error") 
        }
        return response.json();
      })
      .then((data) => setData(data.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [pokemonID]);

  return {
    data,
    loading,
    error
  }
}

const getCardPrice = (card, marketType = MARKET_TYPES[0]) => {
  if (!card[marketType]) {
    return "N/A";
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

export {
  usePagePokemonData,
  useTotalCount,
  useTopCards,
  useFilterData,
  useItemPokemonData,
  getCardPrice,
};
