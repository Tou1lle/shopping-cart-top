import styles from "./../../styles/itempage/ItemPage.module.css";

function ItemLeftContent({ data, MARKET_TYPES, MARKET_URLS }) {
  return (
    <div className={styles["left-side"]}>
      <div className={styles["image-container"]}>
        <img src={data.images.large} alt="" />
      </div>
      <div className={styles["left-side-content"]}>
        <div className={styles["left-details-container"]}>
          <h2 className={styles["left-header"]}>
            <span>{data.name}</span> <span>{data.id}</span>
          </h2>
          <div className={styles["left-detail"]}>
            <span>Rarity</span> <span>{data.rarity}</span>
          </div>
          <div className={styles["left-detail"]}>
            <span>HP</span> <span>{data.hp}</span>
          </div>
          <div className={styles["left-detail"]}>
            <span>Artist</span> <span>{data.artist}</span>
          </div>
        </div>
        <div className={styles["left-links"]}>
          {MARKET_TYPES.map((marketType) => {
            return (
              <a
                key={marketType}
                href={
                  data[marketType]
                    ? data[marketType].url
                    : MARKET_URLS[marketType]
                }
                target="_blank"
                className={styles["external-market-btn"]}
              >
                {marketType.charAt(0).toUpperCase() + marketType.slice(1)}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"
                  />
                </svg>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ItemLeftContent;
