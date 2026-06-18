import styles from "./../../styles/PokeballRules.module.css";
import pokeballTop from "./../../assets/images/pokeball-top-half.png";
import pokeballBot from "./../../assets/images/pokeball-bottom-half.png";

function PokeballRules() {
  return (
    <div className={styles["pokeball"]}>
      <div className={styles["pokeball-img-container"]}>
        <img src={pokeballTop} alt="Top half of a pokeball" />
      </div>
      <div className={styles["pokeball-rules"]}>
        <section className={styles["rules-section"]}>
          <div>
            <h2 className={styles["rules-heading-primary"]}>New Arrivals</h2>
            <h3 className={styles["rules-heading-secondary"]}>Fresh Cards Are Added Daily</h3>
            <p className={styles["rules-paragraph"]}>
              Discover the latest additions to our collection. From newly
              released sets to rare singles, we regularly update our inventory
              so you can find the cards you're looking for before they're gone.
            </p>
          </div>
          <div>
            <h2 className={styles["rules-heading-primary"]}>Featured Collection</h2>
            <h3 className={styles["rules-heading-secondary"]}>Rare Finds & Collector Favorites</h3>
            <p className={styles["rules-paragraph"]}>
              Explore some of the most sought-after Pokémon cards, including
              alternate arts, vintage classics, promotional cards, and modern
              chase cards from the newest expansions.
            </p>
          </div>
          <div>
            <h2 className={styles["rules-heading-primary"]}>For Competitive Players</h2>
            <h3 className={styles["rules-heading-secondary"]}>Upgrade Your Deck</h3>
            <p className={styles["rules-paragraph"]}>
              Find powerful Pokémon, Trainer cards, and essential staples to
              strengthen your strategy. Stay ready for local tournaments, league
              challenges, and competitive play.
            </p>
          </div>
          <div>
            <h2 className={styles["rules-heading-primary"]}>For Collectors</h2>
            <h3 className={styles["rules-heading-secondary"]}>Complete Your Collection</h3>
            <p className={styles["rules-paragraph"]}>
              From iconic vintage cards to modern masterpieces, our catalog is
              designed to help collectors of every level find cards that deserve
              a place in their collection.
            </p>
          </div>
        </section>
      </div>
      <div className={styles["pokeball-img-container"]}>
        <img src={pokeballBot} alt="Bottom half of a pokeball" />
      </div>
    </div>
  );
}

export default PokeballRules;
