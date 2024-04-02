import { FunctionComponent } from "react";
import styles from "./EditAddAJob.module.css";

const EditAddAJob: FunctionComponent = () => {
  return (
    <div className={styles.editAddAJob}>
      <div className={styles.typeOfWorkplace}>
        <img
          className={styles.typeOfWorkplaceChild}
          alt=""
          src="/rectangle.svg"
        />
        <img className={styles.buttonIcon} alt="" src="/button.svg" />
        <div className={styles.manager}>
          <div className={styles.text}>On-site</div>
        </div>
        <b className={styles.text1}>Type of workplace</b>
      </div>
      <div className={styles.description}>
        <img className={styles.descriptionChild} alt="" src="/rectangle.svg" />
        <img className={styles.buttonIcon} alt="" src="/button.svg" />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
        <div className={styles.text2}>
          A fourth-year student from the College of Business Administration,
          majoring in Public Administration
        </div>
        <b className={styles.text3}>Description</b>
      </div>
      <div className={styles.jobLocation}>
        <img
          className={styles.typeOfWorkplaceChild}
          alt=""
          src="/rectangle.svg"
        />
        <img className={styles.buttonIcon} alt="" src="/button.svg" />
        <div className={styles.technicalInformation}>
          <div className={styles.text}>
            <b>Riyad</b>
            <span>, KSA</span>
          </div>
        </div>
        <b className={styles.text5}>training location</b>
      </div>
      <div className={styles.jobPosition}>
        <img
          className={styles.typeOfWorkplaceChild}
          alt=""
          src="/rectangle.svg"
        />
        <img className={styles.buttonIcon} alt="" src="/button.svg" />
        <div className={styles.wirelessSymposiumRws}>
          <div className={styles.text}> Assistant</div>
        </div>
        <b className={styles.text1}>training position*</b>
      </div>
      <div className={styles.company}>
        <img
          className={styles.typeOfWorkplaceChild}
          alt=""
          src="/rectangle.svg"
        />
        <div className={styles.text8}>
          Technical and Vacational Training corporation
        </div>
        <img className={styles.buttonIcon} alt="" src="/button.svg" />
        <b className={styles.text5}>Company</b>
      </div>
      <div className={styles.typeOfWork}>
        <img
          className={styles.typeOfWorkplaceChild}
          alt=""
          src="/rectangle.svg"
        />
        <img className={styles.addIcon} alt="" src="/add.svg" />
        <img className={styles.buttonIcon} alt="" src="/button.svg" />
        <b className={styles.text10}>Training type</b>
        <div className={styles.text11}>{`Cooperative training `}</div>
      </div>
      <img className={styles.buttonIcon6} alt="" src="/button.svg" />
      <b className={styles.text12}>Add a position</b>
      <b className={styles.button}>Post</b>
    </div>
  );
};

export default EditAddAJob;
