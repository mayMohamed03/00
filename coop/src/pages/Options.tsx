import { FunctionComponent } from "react";
import styles from "./Options.module.css";

const Options: FunctionComponent = () => {
  return (
    <div className={styles.options}>
      <div className={styles.itSenior}>
        <img className={styles.itSeniorChild} alt="" src="/rectangle2.svg" />
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
      <div className={styles.isSenior}>
        <img className={styles.itSeniorChild} alt="" src="/rectangle2.svg" />
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
      <div className={styles.cysSenior}>
        <img className={styles.itSeniorChild} alt="" src="/rectangle2.svg" />
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
      <img className={styles.menuBarIcon} alt="" src="/menu-bar.svg" />
      <b className={styles.text21}>Save training</b>
      <div className={styles.button}>Delete all</div>
      <div className={styles.popUp}>
        <div className={styles.popUpChild} />
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/rectangle25.svg" />
        <img className={styles.lineIcon} alt="" src="/line3.svg" />
        <div className={styles.apply}>
          <div className={styles.button1} />
          <div className={styles.text22}>Apply</div>
          <div className={styles.icon}>
            <div className={styles.buttonhover} />
            <div className={styles.imege4} />
            <img className={styles.iconChild} alt="" src="/rectangle26.svg" />
          </div>
        </div>
        <div className={styles.delete}>
          <div className={styles.text23}>Delete</div>
          <img className={styles.buttonhover} alt="" src="/icon8.svg" />
        </div>
        <div className={styles.buttonhover1}>
          <div className={styles.text23}>Shared</div>
          <img className={styles.icon2} alt="" src="/icon9@2x.png" />
        </div>
        <div className={styles.sendMessage}>
          <div className={styles.button2} />
          <div className={styles.text23}>Send message</div>
          <img className={styles.buttonhover} alt="" src="/icon10.svg" />
        </div>
      </div>
    </div>
  );
};

export default Options;
