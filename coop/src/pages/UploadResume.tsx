import { FunctionComponent } from "react";
import styles from "./UploadResume.module.css";

const UploadResume: FunctionComponent = () => {
  return (
    <div className={styles.uploadResume}>
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
      <div className={styles.text2}>
        Upload files in PDF format up to 5 MB. Just upload it once and you can
        use it in your next application.
      </div>
      <div className={styles.jametKudasiCvUiuxDesi}>
        <img
          className={styles.jametKudasiCvUiuxDesiChild}
          alt=""
          src="/rectangle-58.svg"
        />
        <div className={styles.feb2024At}>14 Feb 2024 at 11:30 am</div>
        <div className={styles.jametKudasiCvUiuxDesiItem} />
        <img className={styles.optionIcon} alt="" src="/option@2x.png" />
        <div className={styles.pdf}>
          <div className={styles.pdfChild} />
          <img className={styles.pdfItem} alt="" src="/rectangle33.svg" />
          <img className={styles.pdfInner} alt="" src="/vector.svg" />
          <div className={styles.pdf1}>PDF</div>
        </div>
        <div className={styles.button1}>
          <img className={styles.backChild} alt="" src="/icon18.svg" />
          <div className={styles.removeFile}>Remove file</div>
        </div>
        <div className={styles.text3}>Sara Ali - CV - IT Student</div>
        <div className={styles.text4}>867 Kb</div>
      </div>
    </div>
  );
};

export default UploadResume;
