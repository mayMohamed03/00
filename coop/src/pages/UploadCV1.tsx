import { FunctionComponent } from "react";
import TextArea from "../components/TextArea";
import styles from "./UploadCV1.module.css";

const UploadCV1: FunctionComponent = () => {
  return (
    <div className={styles.uploadCv}>
      <div className={styles.button}>
        <div className={styles.button1} />
        <img className={styles.lineIcon} alt="" src="/line15.svg" />
      </div>
      <div className={styles.button2}>
        <div className={styles.button3}>
          <img className={styles.buttonIcon} alt="" src="/button33.svg" />
          <b className={styles.text}>Apply Now</b>
        </div>
      </div>
      <TextArea
        textArae="/textarea.svg"
        propTop="420px"
        propHeight="266px"
        propHeight1="232px"
      />
      <div className={styles.uploadCvresume}>
        <img className={styles.rectangleIcon} alt="" src="/button15.svg" />
        <div className={styles.text1}>Upload CV/Resume</div>
        <img className={styles.icon} alt="" src="/icon30.svg" />
      </div>
      <b className={styles.text2}>Upload CV</b>
      <div className={styles.text3}>
        Add your CV/Resume to apply for a training
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangle} />
        <b className={styles.text4}>IT Senior</b>
        <div className={styles.text5}>KACST</div>
        <div className={styles.text6}>{`Riyadh `}</div>
        <div className={styles.text7}>1 day ago</div>
        <div className={styles.imege} />
        <div className={styles.imege1} />
        <img className={styles.imegeIcon} alt="" src="/imege6@2x.png" />
      </div>
    </div>
  );
};

export default UploadCV1;
