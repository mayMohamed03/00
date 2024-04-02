import { FunctionComponent } from "react";
import styles from "./YourApplication.module.css";

const YourApplication: FunctionComponent = () => {
  return (
    <div className={styles.yourApplication}>
      <div className={styles.button}>
        <div className={styles.button1} />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <b className={styles.text}>Your application</b>
      <div className={styles.jobDetile}>
        <img className={styles.jobDetileChild} alt="" src="/rectangle.svg" />
        <div className={styles.googleInc}>
          <div className={styles.applicationDetails}>
            <div className={styles.jametKudasiCvUiuxDesi}>
              <img
                className={styles.jametKudasiCvUiuxDesiChild}
                alt=""
                src="/rectangle.svg"
              />
              <div className={styles.text1}>14 Feb 2024 at 11:30 am</div>
              <div className={styles.imege} />
              <img className={styles.optionIcon} alt="" src="/option@2x.png" />
              <div className={styles.pdf}>
                <div className={styles.pdfChild} />
                <img className={styles.pdfItem} alt="" src="/rectangle.svg" />
                <img className={styles.pdfInner} alt="" src="/vector.svg" />
                <div className={styles.text2}>PDF</div>
              </div>
              <div className={styles.text3}>Sara Ali - CV-IT Student.PDF</div>
              <div className={styles.text4}>867 Kb</div>
            </div>
            <div className={styles.cvresume}>
              <div className={styles.text5}>CV/Resume</div>
              <div className={styles.imege1} />
            </div>
            <b className={styles.text6}>Application details</b>
          </div>
          <div className={styles.jobDetails}>
            <div className={styles.textParent}>
              <div className={styles.text5}>{`IT Senior `}</div>
              <div className={styles.imege1} />
            </div>
            <div className={styles.textGroup}>
              <div className={styles.text5}>Full time</div>
              <div className={styles.imege1} />
            </div>
            <b className={styles.text9}>Job details</b>
          </div>
          <div className={styles.uiuxDesigner}>
            <div className={styles.shipped}>
              <div className={styles.text5}>
                Shipped on February 14, 2024 at 11:30 am
              </div>
              <div className={styles.imege1} />
            </div>
            <div className={styles.update}>
              <div className={styles.text5}>
                Updated by recruiter 8 hours ago
              </div>
              <div className={styles.imege1} />
            </div>
            <div className={styles.californiaUsa}>
              <div className={styles.text12}>Riyadh, KSA</div>
              <div className={styles.text13}>KACST</div>
              <div className={styles.imege6} />
            </div>
            <b className={styles.text14}>{`IT Senior `}</b>
          </div>
        </div>
        <div className={styles.button2}>
          <div className={styles.button3} />
          <b className={styles.text15}>Apply for more training</b>
        </div>
      </div>
      <div className={styles.logoGoogle}>
        <div className={styles.imege7} />
        <img className={styles.imegeIcon} alt="" src="/imege@2x.png" />
      </div>
    </div>
  );
};

export default YourApplication;
