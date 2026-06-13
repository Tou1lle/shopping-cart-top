import { usePagePokemonData } from "./utils/dataFetcher";

function FetchingTester() {
  const { data, error, loading, totalCount } = usePagePokemonData();

  if (loading) return <p>Loading...</p>
  if (error) return <p>A network error was encountered.</p>

  return (
    <div>
      <p>Fetching ALL data, count is: {totalCount}</p>
      <ul>
        {data.map(pokemon => {
          return (
            <li>{pokemon.name}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default FetchingTester;