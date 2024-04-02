import { FunctionComponent } from "react";
import styles from "./SaveJob.module.css";

const SaveJob: FunctionComponent = () => {
  return (
    <div className={styles.saveJob}>
      <div className={styles.uiuxDesigner}>
        <img
          className={styles.uiuxDesignerChild}
          alt=""
          src="/rectangle2.svg"
        />
        <div className={styles.logoGoogle}>
          <div className={styles.imege} />
          <img className={styles.imegeIcon} alt="" src="/imege30@2x.png" />
        </div>
        <div className={styles.fullTime}>
          <div className={styles.fullTimeChild} />
          <div className={styles.text}>Full time</div>
        </div>
        <div className={styles.design}>
          <div className={styles.designChild} />
          <div className={styles.text1}>Technlogy</div>
        </div>
        <div className={styles.seniorDesigner}>
          <div className={styles.seniorDesignerChild} />
          <div className={styles.text}>Senior IT</div>
        </div>
        <img className={styles.optionsIcon} alt="" src="/options3.svg" />
        <div className={styles.text3}>25 minute ago</div>
        <div className={styles.text4}>Riyadh, KSA</div>
        <b className={styles.text5}>IT Senior</b>
        <div className={styles.text6}>KACST</div>
        <div className={styles.imege1} />
      </div>
      <div className={styles.leadDesigner}>
        <img
          className={styles.uiuxDesignerChild}
          alt=""
          src="/rectangle2.svg"
        />
        <img className={styles.optionsIcon} alt="" src="/options3.svg" />
        <img className={styles.imegeIcon1} alt="" src="/imege31@2x.png" />
        <div className={styles.fullTime}>
          <div className={styles.fullTimeItem} />
          <div className={styles.text}>Full time</div>
        </div>
        <div className={styles.design}>
          <div className={styles.designItem} />
          <div className={styles.text8}>Technlogy</div>
        </div>
        <div className={styles.seniorDesigner}>
          <div className={styles.seniorDesignerItem} />
          <div className={styles.text9}>Senior IS</div>
        </div>
        <div className={styles.text3}>25 minute ago</div>
        <div className={styles.text11}>Riyadh, KSA</div>
        <b className={styles.text12}>IS Senior</b>
        <div className={styles.text13}>Jarir inc </div>
        <div className={styles.imege2} />
      </div>
      <div className={styles.uxResearcher}>
        <img
          className={styles.uiuxDesignerChild}
          alt=""
          src="/rectangle2.svg"
        />
        <img
          className={styles.twitterLogoIcon}
          alt=""
          src="/twitter-logo@2x.png"
        />
        <div className={styles.fullTime}>
          <div className={styles.fullTimeChild} />
          <div className={styles.text}>Full time</div>
        </div>
        <div className={styles.design}>
          <div className={styles.designChild} />
          <div className={styles.text1}>Technlogy</div>
        </div>
        <div className={styles.seniorDesigner}>
          <div className={styles.seniorDesignerChild} />
          <div className={styles.text1}>CYS Senior</div>
        </div>
        <img className={styles.optionsIcon} alt="" src="/options3.svg" />
        <div className={styles.text3}>25 minute ago</div>
        <div className={styles.text18}>Riyadh, KSA</div>
        <b className={styles.text19}> CYS Senior</b>
        <div className={styles.text20}>Riyad Bank</div>
        <div className={styles.imege3} />
      </div>
      <img className={styles.menuBarIcon} alt="" src="/menu-bar.svg" />
      <b className={styles.text21}>Save training</b>
      <div className={styles.button}>Delete all</div>
    </div>
  );
};

export default SaveJob;
