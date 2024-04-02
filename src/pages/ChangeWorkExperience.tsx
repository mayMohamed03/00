import { FunctionComponent } from "react";
import styles from "./ChangeWorkExperience.module.css";

const ChangeWorkExperience: FunctionComponent = () => {
  return (
    <div className={styles.changeWorkExperience}>
      <div className={styles.back}>
        <div className={styles.backChild} />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.addWorkExperience}>
        <b className={styles.text}>Change work experience</b>
        <div className={styles.jobTitle}>
          <img className={styles.jobTitleChild} alt="" src="/textbox.svg" />
          <div className={styles.text1}>Data entry</div>
          <b className={styles.text2}>Job title</b>
        </div>
        <div className={styles.company}>
          <img className={styles.jobTitleChild} alt="" src="/textbox.svg" />
          <div className={styles.text1}>Amazon Inc</div>
          <b className={styles.text2}>Company</b>
        </div>
        <div className={styles.startDate}>
          <img className={styles.startDateChild} alt="" src="/textbox.svg" />
          <div className={styles.text1}>Jan 2015</div>
          <b className={styles.text2}>Start date</b>
        </div>
        <div className={styles.startDate1}>
          <img className={styles.startDateItem} alt="" src="/button.svg" />
          <img className={styles.startDateInner} alt="" src="/rectangle.svg" />
          <div className={styles.text7}>This is my position now</div>
        </div>
        <div className={styles.description}>
          <img className={styles.descriptionChild} alt="" src="/textarea.svg" />
          <div className={styles.text8}>Write additional information here</div>
          <b className={styles.text2}>Description</b>
        </div>
        <div className={styles.endDate}>
          <img className={styles.startDateChild} alt="" src="/textbox.svg" />
          <div className={styles.text1}>Feb 2020</div>
          <b className={styles.text2}>End date</b>
        </div>
      </div>
      <div className={styles.buttonRemoveSave}>
        <div className={styles.button}>
          <div className={styles.button1} />
          <b className={styles.text12}>Save</b>
        </div>
        <div className={styles.button2}>
          <div className={styles.button3} />
          <b className={styles.text13}>Remove</b>
        </div>
      </div>
    </div>
  );
};

export default ChangeWorkExperience;
