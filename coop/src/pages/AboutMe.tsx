import { FunctionComponent } from "react";
import styles from "./AboutMe.module.css";

const AboutMe: FunctionComponent = () => {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.back}>
        <div className={styles.backChild} />
        <img className={styles.lineIcon} alt="" src="/line6.svg" />
      </div>
      <div className={styles.aboutMe1}>
        <img className={styles.textareaIcon} alt="" src="/textarea.svg" />
        <div className={styles.text}>Tell me about you.</div>
        <div className={styles.text1}>About me</div>
      </div>
      <div className={styles.save}>
        <div className={styles.button} />
        <b className={styles.text2}>Save</b>
      </div>
    </div>
  );
};

export default AboutMe;
