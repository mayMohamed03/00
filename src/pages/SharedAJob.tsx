import { FunctionComponent } from "react";
import styles from "./SharedAJob.module.css";

const SharedAJob: FunctionComponent = () => {
  return (
    <div className={styles.sharedAJob}>
      <div className={styles.menuBar}>
        <img className={styles.menuBarChild} alt="" src="/rectangle.svg" />
        <img className={styles.iconCamera} alt="" src="/icon-camera.svg" />
        <img className={styles.iconPicture} alt="" src="/icon-picture.svg" />
        <b className={styles.button}>Add hashtag</b>
      </div>
      <div className={styles.brandoneLouis}>
        <div className={styles.text}>Riyadh ,KSA</div>
      </div>
      <div className={styles.addWorkExperience}>
        <div className={styles.description}>
          <img
            className={styles.descriptionChild}
            alt=""
            src="/rectangle.svg"
          />
          <div className={styles.text1}>
            <span>
              <span>
                Today I am opening a training in the field of beginner
              </span>
              <span className={styles.span}>{` `}</span>
            </span>
            <span className={styles.span}>
              <b>IT Senior</b>
            </span>
            <span>{` at a `}</span>
            <b className={styles.span}>
              Technical and Vocational Training corporation
            </b>
            <span>. To see a training description, please see below.</span>
          </div>
          <div className={styles.text2}>Hey guys</div>
          <b className={styles.text3}>Description</b>
        </div>
      </div>
      <div className={styles.appleInc}>
        <img className={styles.appleIncChild} alt="" src="/rectangle.svg" />
        <img className={styles.optionsIcon} alt="" src="/options.svg" />
        <b className={styles.text4}>IT Senior</b>
        <div
          className={styles.text5}
        >{`Training vacancies from Technical and v  `}</div>
        <div className={styles.text6}>Riyadh, KSA</div>
        <div className={styles.text7}>On-site</div>
        <div className={styles.imege} />
        <div className={styles.applicationDetails}>
          <img className={styles.buttonIcon} alt="" src="/button.svg" />
          <div className={styles.text8}>Application details</div>
        </div>
      </div>
      <div className={styles.button1}>
        <div className={styles.button2} />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <b className={styles.text9}>Shared a Job</b>
      <b className={styles.button3}>Post</b>
      <b className={styles.text10}>sara alii</b>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <img className={styles.imegeIcon} alt="" src="/imege@2x.png" />
    </div>
  );
};

export default SharedAJob;
