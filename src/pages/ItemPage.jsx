import { useLocation, useParams, Link } from "react-router";
import { useItemPokemonData } from "../utils/dataFetcher";
import { MARKET_TYPES, MARKET_URLS } from "../utils/constants";
import styles from "./../styles/itempage/ItemPage.module.css";

function ItemPage() {
  const { itemID } = useParams();
  const { data, loading, error } = useItemPokemonData(itemID);
  const location = useLocation();
  const backTo = location.state?.from ?? "/shop";
  const pageNumber = backTo.split("/").at(-1);

  if (loading) {
    return <div className={styles["loading-page"]}>Loading</div>;
  }

  if (error) {
    return (
      <div className={styles["error-page"]}>
        A network error must have been caught:/
      </div>
    );
  }

  return (
    <div className={`main-body itempage ${styles["item-page"]}`}>
      <div className={styles["top-navigation"]}>
        <Link to={backTo} className={`link ${styles["nav-back"]}`}>
          Shop page {!!Number(pageNumber) && pageNumber}
        </Link>{" "}
        <svg
          className={styles["nav-split"]}
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="currentColor"
            d="m18.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15a1 1 0 0 0-.15 1.41L16.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 13 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27"
          />
          <path
            fill="currentColor"
            d="M7 5.37a1 1 0 0 0-1.61 1.26L9.71 12l-4.48 5.36a1 1 0 0 0 .13 1.41A1 1 0 0 0 6 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 0-1.27Z"
          />
        </svg>
        <p className={styles["nav-pokemon"]}>
          <span>{data.name}</span>
          <span>&nbsp;#{data.id}</span>
        </p>
      </div>
      <div>
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
        <div></div>
      </div>
    </div>
  );
}

export default ItemPage;
