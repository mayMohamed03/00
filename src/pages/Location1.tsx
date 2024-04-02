import { FunctionComponent } from "react";
import styles from "./Location1.module.css";

const Location1: FunctionComponent = () => {
  return (
    <div className={styles.location}>
      <div className={styles.back}>
        <div className={styles.backChild} />
        <img className={styles.backItem} alt="" src="/line.svg" />
      </div>
      <div className={styles.addSkill}>
        <div className={styles.riyadKsaWrapper}>
          <div className={styles.riyadKsa}>
            <b>Riyad</b>
            <span>, KSA</span>
          </div>
        </div>
        <div className={styles.search}>
          <img className={styles.textboxIcon} alt="" src="/textbox.svg" />
          <img className={styles.iconSearch} alt="" src="/icon-search.svg" />
          <img className={styles.buttonIcon} alt="" src="/button.svg" />
          <img className={styles.imegeIcon} alt="" src="/imege.svg" />
          <div className={styles.text}>riya</div>
        </div>
        <b className={styles.text1}>Location</b>
      </div>
    </div>
  );
};

export default Location1;
