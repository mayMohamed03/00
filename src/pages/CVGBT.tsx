import { FunctionComponent } from "react";
import styles from "./CVGBT.module.css";

const CVGBT: FunctionComponent = () => {
  return (
    <div className={styles.cvGbt}>
      <img className={styles.menuBarIcon} alt="" src="/imege.svg" />
      <div className={styles.cvGbtInner}>
        <div className={styles.groupChild} />
      </div>
      <b className={styles.text}>
        <p className={styles.hello}>Hello</p>
        <p className={styles.hello}>Sara Ali .</p>
      </b>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <b className={styles.text1}>
        <p className={styles.hello}>&nbsp;</p>
        <p className={styles.whatMakesA}>
          What makes a Trainind-winning resume
        </p>
      </b>
      <div className={styles.text2}>
        <p className={styles.hello}>
          We will Reveal the weakness all of them throughout this guide and show
          you how it’s really done.
        </p>
        <p className={styles.hello}>
          <b>Let’s get started.</b>
        </p>
      </div>
      <div className={styles.text3}>
        Add your CV/Resume to apply for a training
      </div>
      <b className={styles.text4}>{`Recommended Skills `}</b>
      <div className={styles.rectangleParent}>
        <div className={styles.groupItem} />
        <b className={styles.text5}> Design</b>
        <img className={styles.imegeIcon} alt="" src="/imege@2x.png" />
        <b className={styles.text6}>
          <p className={styles.hello}>complete</p>
        </b>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupInner} />
        <b className={styles.text7}>communication skills</b>
        <img className={styles.imegeIcon1} alt="" src="/imege@2x.png" />
        <b className={styles.text8}>Not complete</b>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.rectangleDiv} />
        <b className={styles.text9}> Flexibility</b>
        <img className={styles.imegeIcon2} alt="" src="/imege@2x.png" />
        <b className={styles.text10}>Not complete</b>
      </div>
      <div className={styles.jametKudasiCvUiuxDesi}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
        <div className={styles.text11}>14 Feb 2024 at 11:30 am</div>
        <div className={styles.imege} />
        <img className={styles.imegeIcon3} alt="" src="/option@2x.png" />
        <div className={styles.imege1}>
          <div className={styles.rectangle} />
          <img className={styles.rectangleIcon1} alt="" src="/rectangle.svg" />
          <img className={styles.imegeIcon4} alt="" src="/vector.svg" />
          <div className={styles.text12}>PDF</div>
        </div>
        <div className={styles.button}>
          <img className={styles.imegeIcon5} alt="" src="/icon.svg" />
          <div className={styles.text13}>Remove file</div>
        </div>
        <div className={styles.text14}>Sara Ali - CV - IT Student</div>
        <div className={styles.text15}>867 Kb</div>
      </div>
    </div>
  );
};

export default CVGBT;
