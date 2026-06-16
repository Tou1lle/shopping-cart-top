import styles from "./../styles/Hero.module.css";
import pokemonGifURL_1 from "./../assets/images/blastoise-animated.gif";
import pokemonGifUrl_2 from "./../assets/images/drat-animated.gif";
import CardHero from "./CardHero";

function Hero() {
  return (
    <div className={styles["hero-container"]}>
      <h1 className={styles["hero-header"]}>Most Trending Cards Right Now!</h1>
      <div className={styles["hero-content"]}>
        <div className={styles["pokemon-animal-container-right"]}>
          <img
            src={pokemonGifURL_1}
            className={styles["pokemon-animal-right"]}
            alt="Gif image of a Pokémon"
          />
        </div>
        <div className={styles["pokemon-animal-container-left"]}>
          <img
            src={pokemonGifUrl_2}
            className={styles["pokemon-animal-left"]}
            alt="Gif image of a Pokémon"
          />
        </div>
        <div className={styles["cards-container"]}>
          <CardHero />
          <CardHero />
          <CardHero />
        </div>
      </div>
    </div>
  );
}

export default Hero;
