import { useAllPokemonData } from './utils/dataFetcher';

function App() {
  const { data, error, loading } = useAllPokemonData();

  if (loading) return <p>Loading...</p>
  if (error) return <p>A network error was encountered.</p>

  return (
    <div>
      <p>Fetching ALL data, count is: {data.totalCount}</p>
    </div>
  )
}

export default App;