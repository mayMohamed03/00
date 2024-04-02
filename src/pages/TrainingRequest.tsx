import { FunctionComponent } from "react";
import styles from "./TrainingRequest.module.css";

const TrainingRequest: FunctionComponent = () => {
  return (
    <div className={styles.trainingRequest}>
      <div className={styles.back}>
        <div className={styles.backChild} />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.addEducation}>
        <b className={styles.text}>{`Training request `}</b>
        <div className={styles.jobTitle}>
          <img className={styles.textboxIcon} alt="" src="/textbox.svg" />
          <b className={styles.text1}>{`Studen name `}</b>
        </div>
        <div className={styles.company}>
          <img className={styles.textboxIcon} alt="" src="/textbox.svg" />
          <b className={styles.text1}>University ID</b>
        </div>
        <div className={styles.company1}>
          <img className={styles.textboxIcon} alt="" src="/textbox.svg" />
          <b className={styles.text1}>{`Phone Number `}</b>
        </div>
        <div className={styles.startDate}>
          <img className={styles.textboxIcon3} alt="" src="/textbox.svg" />
          <b className={styles.text1}>Start date</b>
        </div>
        <div className={styles.description}>
          <img className={styles.textareaIcon} alt="" src="/textarea.svg" />
          <div className={styles.text5}>Write additional information here</div>
          <b className={styles.text6}>Description</b>
        </div>
        <div className={styles.endDate}>
          <img className={styles.textboxIcon3} alt="" src="/textbox.svg" />
          <b className={styles.text7}>{`Trainin Duration  `}</b>
        </div>
      </div>
      <div className={styles.save}>
        <div className={styles.button} />
        <b className={styles.text8}>Save</b>
      </div>
    </div>
  );
};

export default TrainingRequest;
