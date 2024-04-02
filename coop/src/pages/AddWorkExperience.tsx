import { FunctionComponent } from "react";
import styles from "./AddWorkExperience.module.css";

const AddWorkExperience: FunctionComponent = () => {
  return (
    <div className={styles.addWorkExperience}>
      <div className={styles.back}>
        <div className={styles.backChild} />
        <img className={styles.backItem} alt="" src="/line6.svg" />
      </div>
      <div className={styles.addWorkExperience1}>
        <b className={styles.text}>Add work experience</b>
        <div className={styles.jobTitle}>
          <img className={styles.textboxIcon} alt="" src="/textbox2.svg" />
          <b className={styles.text1}>Job title</b>
        </div>
        <div className={styles.company}>
          <img className={styles.textboxIcon} alt="" src="/textbox2.svg" />
          <b className={styles.text1}>Company</b>
        </div>
        <div className={styles.startDate}>
          <img className={styles.textboxIcon2} alt="" src="/textbox3.svg" />
          <b className={styles.text1}>Start date</b>
        </div>
        <div className={styles.startDate1}>
          <img className={styles.buttonIcon} alt="" src="/button14.svg" />
          <div className={styles.text4}>This is my position now</div>
        </div>
        <div className={styles.description}>
          <img className={styles.textareaIcon} alt="" src="/textarea1.svg" />
          <div className={styles.text5}>Write additional information here</div>
          <b className={styles.text6}>Description</b>
        </div>
        <div className={styles.endDate}>
          <img className={styles.textboxIcon2} alt="" src="/textbox3.svg" />
          <b className={styles.text1}>End date</b>
        </div>
      </div>
      <div className={styles.save}>
        <div className={styles.button} />
        <b className={styles.text8}>Save</b>
      </div>
    </div>
  );
};

export default AddWorkExperience;
