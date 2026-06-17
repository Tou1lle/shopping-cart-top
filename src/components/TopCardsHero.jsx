import styles from "./../styles/Hero.module.css";
import { useTopCards } from "./../utils/dataFetcher";
import CardHero from "./CardHero";
import CardHeroEmpty from "./CardHeroEmpty";  

function TopCardsHero() {
  const limit = 3;
  const { data, loading } = useTopCards(limit);

  return (
    <div className={styles["cards-container"]}>
      {loading 
      && Array.from({ length: limit}, (_, i) => {
        return <CardHeroEmpty key={i} />
      }) 
      || data.map(pokemon => {
        return <CardHero key={pokemon.id} pokemon={pokemon} />
      })}
    </div>
  )
}

export default TopCardsHero;
