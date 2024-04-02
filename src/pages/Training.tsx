import { FunctionComponent } from "react";
import styles from "./Training.module.css";

const Training: FunctionComponent = () => {
  return (
    <div className={styles.training}>
      <div className={styles.tabMenu}>
        <div className={styles.tabMenuChild} />
        <div className={styles.description}>
          <div className={styles.button} />
          <div className={styles.text}>About us</div>
        </div>
        <div className={styles.company}>
          <div className={styles.button1} />
          <div className={styles.text1}>training</div>
        </div>
        <div className={styles.buttonParent}>
          <div className={styles.button} />
          <div className={styles.text2}>Post</div>
        </div>
      </div>
      <div className={styles.popularJobs}>
        <div className={styles.googleInc}>
          <img className={styles.googleIncChild} alt="" src="/rectangle.svg" />
          <div className={styles.logoGoogle}>
            <div className={styles.logoGoogleChild} />
            <img className={styles.imegeIcon} alt="" src="/imege@2x.png" />
          </div>
          <div className={styles.fullTime}>
            <div className={styles.fullTimeChild} />
            <div className={styles.text3}>Full time</div>
          </div>
          <div className={styles.design}>
            <div className={styles.designChild} />
            <div className={styles.text3}>Programmer</div>
          </div>
          <div className={styles.seniorDesigner}>
            <img
              className={styles.seniorDesignerChild}
              alt=""
              src="/rectangle.svg"
            />
            <div className={styles.text5}>Cooperative Training</div>
          </div>
          <div className={styles.save}>
            <div className={styles.saveChild} />
            <img className={styles.saveItem} alt="" src="/rectangle.svg" />
          </div>
          <div className={styles.text6}>45 minute ago</div>
          <div className={styles.text7}>Riyadh, KSA</div>
          <b className={styles.text8}>IT Senior</b>
          <div className={styles.text9}>
            <b>KACST</b>
            <span> inc</span>
          </div>
          <div className={styles.imege} />
        </div>
      </div>
      <div className={styles.googleInc1}>
        <img className={styles.googleIncChild} alt="" src="/rectangle.svg" />
        <div className={styles.logoGoogle}>
          <div className={styles.logoGoogleChild} />
          <img className={styles.imegeIcon1} alt="" src="/imege@2x.png" />
        </div>
        <div className={styles.fullTime1}>
          <div className={styles.fullTimeItem} />
          <div className={styles.text10}>Part time</div>
        </div>
        <div className={styles.design1}>
          <div className={styles.designItem} />
          <div className={styles.text11}>Design</div>
        </div>
        <div className={styles.seniorDesigner1}>
          <div className={styles.seniorDesignerItem} />
          <div className={styles.text12}>beginner</div>
        </div>
        <div className={styles.save}>
          <div className={styles.saveChild} />
          <img className={styles.saveItem} alt="" src="/rectangle.svg" />
        </div>
        <div className={styles.text13}>25 minute ago</div>
        <div className={styles.text14}>Riyadh, KSA</div>
        <b className={styles.text15}>
          <p className={styles.informationSystemsJenior}>
            Information systems jenior
          </p>
        </b>
        <div className={styles.text9}>
          <b>KACST</b>
          <span> inc</span>
        </div>
        <div className={styles.imege} />
      </div>
      <div className={styles.googleInc2}>
        <img className={styles.googleIncChild} alt="" src="/rectangle.svg" />
        <div className={styles.logoGoogle2}>
          <div className={styles.imege2} />
          <img className={styles.imegeIcon2} alt="" src="/imege@2x.png" />
        </div>
        <div className={styles.fullTime1}>
          <div className={styles.fullTimeItem} />
          <div className={styles.text17}>Full time</div>
        </div>
        <div className={styles.design1}>
          <div className={styles.designItem} />
          <div className={styles.text11}>Design</div>
        </div>
        <div className={styles.seniorDesigner2}>
          <div className={styles.seniorDesignerInner} />
          <div className={styles.text17}>Senior designer</div>
        </div>
        <div className={styles.save}>
          <div className={styles.saveChild} />
          <img className={styles.saveItem} alt="" src="/rectangle.svg" />
        </div>
        <div className={styles.text20}>
          <span className={styles.k}>
            <span>$15K</span>
            <span className={styles.span}>/</span>
          </span>
          <span className={styles.span}>
            <span>Mo</span>
          </span>
        </div>
        <div className={styles.text13}>25 minute ago</div>
        <div className={styles.text14}>California, USA</div>
        <b className={styles.text23}>Graphic Dsigner</b>
        <div className={styles.text9}>Google inc</div>
        <div className={styles.imege} />
      </div>
      <div className={styles.optionsParent}>
        <img className={styles.optionsIcon} alt="" src="/options.svg" />
        <div className={styles.saveChild}>
          <div className={styles.saveChild} />
          <img className={styles.lineIcon} alt="" src="/imege.svg" />
        </div>
      </div>
      <div className={styles.buttonGroup}>
        <img className={styles.buttonIcon} alt="" src="/button.svg" />
        <img className={styles.icon} alt="" src="/icon.svg" />
        <div className={styles.text25}>Visit website</div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.button3} />
        <img className={styles.addIcon} alt="" src="/add.svg" />
        <div className={styles.text26}>Follow</div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <b className={styles.text27}>IT Senior</b>
        <div className={styles.text28}>KACST</div>
        <div className={styles.text29}>{`Riyadh `}</div>
        <div className={styles.text30}>1 day ago</div>
        <div className={styles.imege4} />
        <div className={styles.imege5} />
        <img className={styles.imegeIcon3} alt="" src="/imege@2x.png" />
      </div>
    </div>
  );
};

export default Training;
