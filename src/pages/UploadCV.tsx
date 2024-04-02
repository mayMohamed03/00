import { FunctionComponent } from "react";
import TextArea from "../components/TextArea";
import styles from "./UploadCV.module.css";

const UploadCV: FunctionComponent = () => {
  return (
    <div className={styles.uploadCv}>
      <div className={styles.button}>
        <div className={styles.rectangle} />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.button1}>
        <div className={styles.button2}>
          <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
          <b className={styles.text}>Apply Now</b>
        </div>
      </div>
      <TextArea textArae="/textarae.svg" />
      <div className={styles.jametKudasiCvUiuxDesi}>
        <img className={styles.rectangleIcon1} alt="" src="/rectangle.svg" />
        <div className={styles.text1}>14 Feb 2024 at 11:30 am</div>
        <div className={styles.imege} />
        <img className={styles.buttonIcon} alt="" src="/option@2x.png" />
        <div className={styles.pdf}>
          <div className={styles.rectangle1} />
          <img className={styles.imegeIcon} alt="" src="/rectangle.svg" />
          <img className={styles.imegeIcon1} alt="" src="/vector.svg" />
          <div className={styles.text2}>PDF</div>
        </div>
        <div className={styles.button3}>
          <img className={styles.rectangle} alt="" src="/icon.svg" />
          <div className={styles.text3}>Remove file</div>
        </div>
        <div className={styles.text4}>Sara Ali - CV - IT Student</div>
        <div className={styles.text5}>867 Kb</div>
      </div>
      <b className={styles.text6}>Upload CV</b>
      <div className={styles.text7}>
        Add your CV/Resume to apply for a Training
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangle2} />
        <b className={styles.text8}>IT tudent</b>
        <div className={styles.text9}>KACST</div>
        <div className={styles.text10}>{`Riyadh `}</div>
        <div className={styles.text11}>1 day ago</div>
        <div className={styles.imege1} />
        <div className={styles.imege2} />
        <img className={styles.imegeIcon2} alt="" src="/imege@2x.png" />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangle2} />
        <b className={styles.text12}>IT Senior</b>
        <div className={styles.text9}>KACST</div>
        <div className={styles.text10}>{`Riyadh `}</div>
        <div className={styles.text11}>1 day ago</div>
        <div className={styles.imege1} />
        <div className={styles.imege2} />
        <img className={styles.imegeIcon2} alt="" src="/imege@2x.png" />
      </div>
    </div>
  );
};

export default UploadCV;
