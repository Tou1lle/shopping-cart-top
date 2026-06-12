import { useEffect, useState } from 'react'
import { BASE_API_CARDS, API_KEY } from './constants';

const useAllPokemonData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BASE_API_CARDS, {
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
    .then(data => setData(data))
    .catch(error => setError(error))
    .finally(() => setLoading(false));
  }, []);

  return { data, error, loading }
}

export { useAllPokemonData }