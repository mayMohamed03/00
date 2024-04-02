import { FunctionComponent } from "react";
import styles from "./Filter1.module.css";

const Filter1: FunctionComponent = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.back}>
        <div className={styles.button} />
        <img className={styles.lineIcon} alt="" src="/imege48.svg" />
      </div>
      <b className={styles.text}>Filter</b>
      <div className={styles.lastUpdate}>
        <img className={styles.lastUpdateChild} alt="" src="/rectangle70.svg" />
        <div className={styles.text1}>Category</div>
        <div className={styles.text2}>Sub Category</div>
        <div className={styles.text3}>Location</div>
        <b className={styles.text4}>{`Training Type Time `}</b>
      </div>
      <div className={styles.menuBar}>
        <div className={styles.button1}>
          <img className={styles.buttonIcon} alt="" src="/button25.svg" />
          <b className={styles.text5}>Apply Now</b>
        </div>
      </div>
      <div className={styles.textbox} />
      <div className={styles.textbox1} />
      <div className={styles.textbox2} />
      <div className={styles.text6}>Sciecne and technology</div>
      <div className={styles.text7}>IT Senior</div>
      <div className={styles.text8}>Riyadh</div>
      <b className={styles.text9}>{`Training Type  `}</b>
      <div className={styles.hybrid}>
        <div className={styles.text10}>Cooperative Training</div>
      </div>
      <div className={styles.remote}>
        <div className={styles.text11}>Summer Internship</div>
        <div className={styles.buttonhover} />
      </div>
      <img className={styles.filterChild} alt="" src="/group-50.svg" />
      <div className={styles.seniorDesigner}>
        <div className={styles.button2} />
        <div className={styles.text12}>Full time</div>
      </div>
      <div className={styles.seniorDesigner1}>
        <div className={styles.button2} />
        <div className={styles.text13}>Part time</div>
      </div>
      <div className={styles.seniorDesigner2}>
        <div className={styles.button4} />
        <div className={styles.text14}>Remote</div>
      </div>
    </div>
  );
};

export default Filter1;
