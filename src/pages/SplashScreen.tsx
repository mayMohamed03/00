import { FunctionComponent } from "react";
import styles from "./SplashScreen.module.css";

const SplashScreen: FunctionComponent = () => {
  return (
    <div className={styles.splashScreen}>
      <img className={styles.imegeIcon} alt="" src="/imege@2x.png" />
      <b className={styles.text}>
        <p className={styles.findYour}>
          <span className={styles.findYour1}>{`Find Your `}</span>
        </p>
        <p className={styles.findYour}>
          <span className={styles.dreamTraining1}>Dream training</span>
          <span className={styles.span}>{` `}</span>
        </p>
        <p className={styles.findYour}>
          <span className={styles.findYour1}>Here!</span>
        </p>
      </b>
      <img className={styles.imegeIcon1} alt="" src="/imege.svg" />
      <img className={styles.buttonIcon} alt="" src="/button.svg" />
      <div className={styles.text1}>
        <p className={styles.findYour}>
          Explore all the most exciting training roles based
        </p>
        <p className={styles.findYour}>on your interest and study major.</p>
      </div>
    </div>
  );
};

export default SplashScreen;
