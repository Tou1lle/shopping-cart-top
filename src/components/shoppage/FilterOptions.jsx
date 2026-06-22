import styles from "./../../styles/shoppage/ShopFilters.module.css";

function FilterOptions({
  data,
  loading,
  error,
  active,
  currentOption,
  baseOption,
  setOption,
}) {
  return (
    <div>
      {loading ? (
        <div></div>
      ) : error ? (
        <div>A network error has occured.</div>
      ) : (
        <div>
          <button onClick={() => setOption(baseOption)}>{baseOption}</button>
          {data.map((option) => (
            <button onClick={() => setOption(option)}>{option}</button>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterOptions;
