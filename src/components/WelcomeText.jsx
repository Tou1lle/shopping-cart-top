import styles from "./../styles/WelcomeText.module.css";

function WelcomeText() {
  return (
    <div className={styles["welcome-text-container"]}>
      <p className={styles["welcome-quote"]}>
        I Wanna Make Friends With All The Pokemon In The World. That's Gotta Be
        What It Means To Be A Pokemon Master.
      </p>
      <p className={styles["welcome-author"]}>- Ash Ketchum</p>
    </div>
  );
}

export default WelcomeText;
