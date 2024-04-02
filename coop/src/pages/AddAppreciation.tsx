import { FunctionComponent } from "react";
import styles from "./AddAppreciation.module.css";

const AddAppreciation: FunctionComponent = () => {
  return (
    <div className={styles.addAppreciation}>
      <div className={styles.back}>
        <div className={styles.backChild} />
        <img className={styles.lineIcon} alt="" src="/line1.svg" />
      </div>
      <div className={styles.addWorkExperience}>
        <div className={styles.text}>Add Appreciation</div>
        <div className={styles.jobTitle}>
          <img className={styles.jobTitleChild} alt="" src="/textbox2.svg" />
          <div className={styles.text1}>Award name</div>
        </div>
        <div className={styles.company}>
          <img className={styles.jobTitleChild} alt="" src="/textbox2.svg" />
          <div className={styles.text1}>Category/Achievement achieved</div>
        </div>
        <div className={styles.description}>
          <img
            className={styles.descriptionChild}
            alt=""
            src="/textarea1.svg"
          />
          <div className={styles.text3}>Write additional information here</div>
          <div className={styles.text4}>Description</div>
        </div>
        <div className={styles.endDate}>
          <img className={styles.endDateChild} alt="" src="/textbox3.svg" />
          <div className={styles.text1}>End date</div>
        </div>
      </div>
      <div className={styles.save}>
        <div className={styles.button} />
        <b className={styles.text6}>Save</b>
      </div>
    </div>
  );
};

export default AddAppreciation;
