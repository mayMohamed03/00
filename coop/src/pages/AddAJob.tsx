import { FunctionComponent } from "react";
import styles from "./AddAJob.module.css";

const AddAJob: FunctionComponent = () => {
  return (
    <div className={styles.addAJob}>
      <div className={styles.workExperience}>
        <img
          className={styles.workExperienceChild}
          alt=""
          src="/rectangle12.svg"
        />
        <b className={styles.text}>Type of workplace</b>
      </div>
      <div className={styles.aboutMe}>
        <img
          className={styles.workExperienceChild}
          alt=""
          src="/rectangle12.svg"
        />
        <b className={styles.text}>training position*</b>
        <img className={styles.buttonIcon} alt="" src="/button2.svg" />
        <img className={styles.buttonIcon1} alt="" src="/button2.svg" />
      </div>
      <div className={styles.education}>
        <img
          className={styles.workExperienceChild}
          alt=""
          src="/rectangle12.svg"
        />
        <b className={styles.text}>training location</b>
      </div>
      <div className={styles.skill}>
        <img
          className={styles.workExperienceChild}
          alt=""
          src="/rectangle12.svg"
        />
        <b className={styles.text}>Company</b>
      </div>
      <div className={styles.language}>
        <img
          className={styles.workExperienceChild}
          alt=""
          src="/rectangle12.svg"
        />
        <b className={styles.text}>Training type</b>
      </div>
      <div className={styles.description}>
        <img
          className={styles.descriptionChild}
          alt=""
          src="/rectangle13.svg"
        />
        <b className={styles.text}>Description</b>
      </div>
      <img className={styles.buttonIcon2} alt="" src="/button3.svg" />
      <b className={styles.text6}>Add a training</b>
      <b className={styles.button}>Post</b>
      <img className={styles.buttonIcon3} alt="" src="/button2.svg" />
      <img className={styles.buttonIcon4} alt="" src="/button2.svg" />
      <img className={styles.buttonIcon5} alt="" src="/button2.svg" />
      <img className={styles.buttonIcon6} alt="" src="/button2.svg" />
    </div>
  );
};

export default AddAJob;
