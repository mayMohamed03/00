import { FunctionComponent } from "react";
import styles from "./HomeScreen.module.css";

const HomeScreen: FunctionComponent = () => {
  return (
    <div className={styles.homeScreen}>
      <div className={styles.jobRecommendation}>
        <b className={styles.text}>Recent Job List</b>
        <div className={styles.googleInc}>
          <img className={styles.buttonIcon} alt="" src="/rectangle.svg" />
          <div className={styles.fullTime}>
            <div className={styles.rectangle} />
            <div className={styles.text1}>Full time</div>
          </div>
          <div className={styles.fullTime1}>
            <div className={styles.rectangle1} />
            <div className={styles.text2}>Apply</div>
          </div>
          <div className={styles.seniorDesigner}>
            <div className={styles.rectangle2} />
            <div className={styles.text3}>Senior IT</div>
          </div>
          <div className={styles.save}>
            <div className={styles.button} />
            <img className={styles.buttonIcon1} alt="" src="/rectangle.svg" />
          </div>
          <div className={styles.text4}>Riyadh , KSA</div>
          <b className={styles.text5}>{`IT Student `}</b>
          <div className={styles.text6}>KACST</div>
          <div className={styles.imege} />
        </div>
      </div>
      <b className={styles.text7}>{`Find Your Training `}</b>
      <img className={styles.imegeIcon} alt="" src="/imege.svg" />
      <div className={styles.button1}>
        <img className={styles.buttonIcon2} alt="" src="/button.svg" />
        <img className={styles.buttonIcon3} alt="" src="/button@2x.png" />
        <div className={styles.text8}>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.weWillReveal}>
            We will Reveal the weakness all of them throughout this guide and
            show you how it’s really done.
          </p>
        </div>
        <div className={styles.text9}>
          Your resume is more than just a document on your computer.
        </div>
      </div>
      <div className={styles.imege1} />
      <b className={styles.text10}>
        <p className={styles.blankLine}>Hello</p>
        <p className={styles.blankLine}>Sara Ali .</p>
      </b>
      <div className={styles.button2}>
        <div className={styles.button3} />
        <b className={styles.text11}>38.9k</b>
        <div className={styles.text12}>Part Time</div>
      </div>
      <div className={styles.button4}>
        <div className={styles.button5} />
        <b className={styles.text11}>66.8k</b>
        <div className={styles.text14}>Full Time</div>
      </div>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <div className={styles.button6}>
        <div className={styles.button7} />
        <b className={styles.text15}>{`Remote Training `}</b>
        <b className={styles.text16}>44.5k</b>
        <img className={styles.imegeIcon1} alt="" src="/imege@2x.png" />
      </div>
      <img className={styles.imegeIcon2} alt="" src="/imege@2x.png" />
    </div>
  );
};

export default HomeScreen;
