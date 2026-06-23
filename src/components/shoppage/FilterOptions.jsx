import styles from "./../../styles/shoppage/ShopFilters.module.css";

function FilterOptions({
  data,
  loading,
  error,
  active,
  currentOption,
  baseOption,
  setOption,
  onClick,
}) {
  return (
    <div>
      {loading ? (
        <div className={styles["loading-container"]}>
          <div
            className={`
            ${styles.loading}
            ${active ? styles.visible : ""}  
          `}
          >
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        </div>
      ) : error ? (
        <div>A network error has occured.</div>
      ) : (
        <div className={styles["options-container"]}>
          <div
            className={`
            ${styles.options}
            ${active ? styles.visible : ""}
          `}
          >
            {[baseOption, ...data].map((option) => (
              <button
                key={option}
                className={`
                  ${styles.option}
                  ${currentOption === option ? styles["active-drop"] : ""}  
                `}
                onClick={() => {
                  setOption(option);
                  onClick();
                }}
              >
                {option}
                {currentOption === option && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 0h16v16H0z" fill="none" />
                    <path
                      fill="currentColor"
                      d="M13.864 3.655a.5.5 0 0 1-.021.707l-7.93 7.474a.6.6 0 0 1-.839-.016L2.394 9.1a.5.5 0 0 1 .712-.702l2.406 2.442l7.645-7.206a.5.5 0 0 1 .707.021"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterOptions;
