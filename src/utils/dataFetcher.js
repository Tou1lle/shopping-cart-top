import { useEffect, useState } from 'react'
import { BASE_API_CARDS, API_KEY } from './constants';

const PAGE_SIZE = 25;

const useAllPokemonData = (pageNumber = 2) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const pageAPI = Math.ceil(pageNumber / 10);
  const sliceStart = (((pageNumber % 10) - 1) * PAGE_SIZE);
  const sliceEnd = sliceStart + PAGE_SIZE;

  const params = new URLSearchParams({
    page: pageAPI
  });

  useEffect(() => {
    fetch(BASE_API_CARDS + `?${params}`, {
      headers: {
        'X-API-Key': API_KEY
      }
    })
    .then(response => {
      if (response.status >= 400) {
        throw new Error('server error');
      }
      return response.json();
    })
    .then(data => {
      const pageCards = data.data.slice(sliceStart, sliceEnd);
      setData(pageCards);
      console.log(pageCards);
    })
    .catch(error => setError(error))
    .finally(() => setLoading(false));
  }, []);

  return { data, error, loading }
}

export { useAllPokemonData }