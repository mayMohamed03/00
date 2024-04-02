import { FunctionComponent } from "react";
import styles from "./Specialization.module.css";

const Specialization: FunctionComponent = () => {
  return (
    <div className={styles.specialization}>
      <div className={styles.header}>
        <img className={styles.filterIcon} alt="" src="/filter2.svg" />
        <div className={styles.search}>
          <img className={styles.textboxIcon} alt="" src="/textbox5.svg" />
          <img className={styles.iconSearch} alt="" src="/icon-search1.svg" />
          <div className={styles.text}>Search</div>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.button1} />
        <img className={styles.lineIcon} alt="" src="/line1.svg" />
      </div>
      <div className={styles.spesialisasi}>
        <b className={styles.text1}>Specialization</b>
        <div className={styles.scienceTechnology}>
          <div className={styles.buttonhover} />
          <b className={styles.text2}>
            <p className={styles.science}>Science</p>
            <p className={styles.science}>Technology</p>
          </b>
          <div className={styles.text3}>140 training</div>
          <div className={styles.scienceTechnologyChild} />
          <img className={styles.iconDesign} alt="" src="/icon-design1.svg" />
          <img className={styles.imegeIcon} alt="" src="/imege49@2x.png" />
        </div>
        <div className={styles.businessManagement}>
          <img
            className={styles.buttonhoverIcon}
            alt=""
            src="/buttonhover2.svg"
          />
          <b className={styles.text4}>Business Management</b>
          <div className={styles.text5}>250 training</div>
          <img className={styles.icon} alt="" src="/icon22.svg" />
        </div>
        <div className={styles.restaurant}>
          <div className={styles.buttonhover1} />
          <b className={styles.text6}>Restaurant</b>
          <div className={styles.text7}>85 training</div>
          <img className={styles.iconDesign} alt="" src="/icon23.svg" />
        </div>
        <div className={styles.education}>
          <div className={styles.buttonhover1} />
          <b className={styles.text8}>Education</b>
          <div className={styles.text9}>120 training</div>
          <img className={styles.iconDesign} alt="" src="/icon24.svg" />
        </div>
        <div className={styles.health}>
          <div className={styles.buttonhover1} />
          <b className={styles.text10}>Health</b>
          <div className={styles.text11}>235 training</div>
          <img className={styles.icon3} alt="" src="/icon25@2x.png" />
        </div>
        <div className={styles.law}>
          <div className={styles.buttonhover1} />
          <b className={styles.text12}>law</b>
          <div className={styles.text7}>412 training</div>
          <div className={styles.icon}>
            <div className={styles.imege} />
            <img className={styles.imegeIcon1} alt="" src="/imege10@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialization;
