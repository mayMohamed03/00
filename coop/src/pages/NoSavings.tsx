import { FunctionComponent } from "react";
import styles from "./NoSavings.module.css";

const NoSavings: FunctionComponent = () => {
  return (
    <div className={styles.noSavings}>
      <div className={styles.noSavings1}>
        <b className={styles.text}>No Savings</b>
        <div className={styles.text1}>
          You don't have any training saved, please find it in search to save
          training
        </div>
        <img
          className={styles.illustrationIcon}
          alt=""
          src="/illustration1@2x.png"
        />
      </div>
      <div className={styles.findAJob}>
        <div className={styles.button} />
        <b className={styles.text2}>Find a training</b>
      </div>
      <img className={styles.menuBarIcon} alt="" src="/menu-bar.svg" />
    </div>
  );
};

export default NoSavings;
