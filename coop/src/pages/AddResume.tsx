import { FunctionComponent } from "react";
import styles from "./AddResume.module.css";

const AddResume: FunctionComponent = () => {
  return (
    <div className={styles.addResume}>
      <div className={styles.back}>
        <div className={styles.backChild} />
        <img className={styles.lineIcon} alt="" src="/line1.svg" />
      </div>
      <div className={styles.addWorkExperience}>
        <div className={styles.text}>Add Resume</div>
      </div>
      <div className={styles.save}>
        <div className={styles.button} />
        <b className={styles.text1}>Save</b>
      </div>
      <div className={styles.uploadCvresume}>
        <img className={styles.buttonIcon} alt="" src="/button15.svg" />
        <div className={styles.text2}>Upload CV/Resume</div>
        <img className={styles.icon} alt="" src="/icon17.svg" />
      </div>
      <div className={styles.text3}>
        Upload files in PDF format up to 5 MB. Just upload it once and you can
        use it in your next application.
      </div>
    </div>
  );
};

export default AddResume;
