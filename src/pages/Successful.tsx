import { FunctionComponent } from "react";
import styles from "./Successful.module.css";

const Successful: FunctionComponent = () => {
  return (
    <div className={styles.successful}>
      <div className={styles.findASimilarJob}>
        <img className={styles.buttonIcon} alt="" src="/button.svg" />
        <b className={styles.text}>Find a similar training</b>
      </div>
      <div className={styles.button}>
        <img className={styles.buttonIcon} alt="" src="/button.svg" />
        <b className={styles.text1}>Back to home</b>
      </div>
      <div className={styles.jametKudasiCvUiuxDesi}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
        <div className={styles.pdf}>
          <div className={styles.rectangle} />
          <img className={styles.rectangleIcon1} alt="" src="/rectangle.svg" />
          <img className={styles.imegeIcon} alt="" src="/line.svg" />
          <div className={styles.text2}>PDF</div>
        </div>
        <div className={styles.text3}>Sara Ali - CV - IT Student</div>
        <div className={styles.text4}>867 Kb</div>
        <div className={styles.text5}>14 Feb 2024 at 11:30 am</div>
        <div className={styles.imege} />
      </div>
      <img className={styles.illustrationIcon} alt="" src="/illustration.svg" />
      <b className={styles.text6}>Successful</b>
      <div className={styles.text7}>
        Congratulations, your application has been sent
      </div>
      <div className={styles.buttonParent}>
        <img className={styles.buttonIcon2} alt="" src="/button.svg" />
        <div className={styles.button1}>
          <div className={styles.button1} />
          <img className={styles.lineIcon} alt="" src="/line.svg" />
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangle1} />
        <b className={styles.text8}>IT Senior</b>
        <div className={styles.text9}>KACST</div>
        <div className={styles.text10}>{`Riyadh `}</div>
        <div className={styles.text11}>1 day ago</div>
        <div className={styles.imege1} />
        <div className={styles.imege2} />
        <img className={styles.imegeIcon1} alt="" src="/imege@2x.png" />
      </div>
    </div>
  );
};

export default Successful;
