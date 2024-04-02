import { FunctionComponent } from "react";
import styles from "./EditAppreciation.module.css";

const EditAppreciation: FunctionComponent = () => {
  return (
    <div className={styles.editAppreciation}>
      <img className={styles.removeIcon} alt="" src="/button3.svg" />
      <div className={styles.addWorkExperience}>
        <div className={styles.text}>Edit Appreciation</div>
        <div className={styles.jobTitle}>
          <img className={styles.jobTitleChild} alt="" src="/textbox2.svg" />
          <div className={styles.text1}>Wireless Symposium (RWS)</div>
          <div className={styles.text2}>Award name</div>
        </div>
        <div className={styles.company}>
          <img className={styles.jobTitleChild} alt="" src="/textbox2.svg" />
          <div className={styles.text1}>Young Scientist</div>
          <div className={styles.text2}>Category/Achievement achieved</div>
        </div>
        <div className={styles.description}>
          <img
            className={styles.descriptionChild}
            alt=""
            src="/textarea1.svg"
          />
          <div className={styles.text5}>Write additional information here</div>
          <div className={styles.text2}>Description</div>
        </div>
        <div className={styles.endDate}>
          <img className={styles.endDateChild} alt="" src="/textbox3.svg" />
          <div className={styles.text1}>2022</div>
          <div className={styles.text2}>End date</div>
        </div>
      </div>
      <div className={styles.buttonRemoveSave}>
        <div className={styles.button}>
          <div className={styles.button1} />
          <b className={styles.text9}>Save</b>
        </div>
        <div className={styles.button2}>
          <div className={styles.button3} />
          <b className={styles.text10}>Remove</b>
        </div>
      </div>
    </div>
  );
};

export default EditAppreciation;
