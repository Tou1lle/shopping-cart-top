import styles from "./../../styles/homepage/OutroImage.module.css";
import gifURL from "./../../assets/images/pokemon-character-walk-animated.gif";

function OutroImage() {
  return (
    <div className={styles["outro-container"]}>
      <div 
        className="image-container"
        style={{
          maxWidth: "1100px",
          margin: "auto"
        }}
      >
        <img src={gifURL} alt="Animated GIF of walking characters from Pokémon" />
      </div>
    </div>
  )
}

export default OutroImage;