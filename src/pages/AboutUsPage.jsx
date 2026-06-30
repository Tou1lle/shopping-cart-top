import { usePokemonGif } from "../utils/dataFetcher";

function AboutUsPage() {
  const { imageURL, loading, error } = usePokemonGif("pokemon");

  if (error) {
    return (
      <div
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>Error</p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "var(--padding-M)",
        gap: "var(--padding-M)",
        flex: "1",
      }}
    >
      <h1
        style={{
          color: "var(--color-text-special)",
        }}
      >
        Nothing to see here &#128526;
      </h1>
      <div>
        {loading ? "Loading image" : <img src={imageURL} alt="Pokemon Gif" />}
      </div>
    </div>
  );
}

export default AboutUsPage;
