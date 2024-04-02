import { FunctionComponent } from "react";
import styles from "./Search.module.css";

const Search: FunctionComponent = () => {
  return (
    <div className={styles.search}>
      <div className={styles.header}>
        <img
          className={styles.backgroundIcon}
          alt=""
          src="/background@2x.png"
        />
        <div className={styles.search1}>
          <img className={styles.textboxIcon} alt="" src="/textbox4.svg" />
          <img className={styles.iconSearch} alt="" src="/icon-search4.svg" />
          <div className={styles.text}>Science and Technology</div>
        </div>
        <div className={styles.location}>
          <img className={styles.textboxIcon} alt="" src="/textbox4.svg" />
          <img className={styles.iconSearch} alt="" src="/icon-location.svg" />
          <div className={styles.text1}>Riyadh,KSA</div>
        </div>
        <img className={styles.filterIcon} alt="" src="/filter1.svg" />
        <div className={styles.seniorDesigner}>
          <div className={styles.button} />
          <div className={styles.text2}>Senior IT</div>
        </div>
        <div className={styles.seniorDesigner1}>
          <div className={styles.button1} />
          <div className={styles.text3}>IT Student</div>
        </div>
        <div className={styles.seniorDesigner2}>
          <div className={styles.button2} />
          <div className={styles.text4}>Full-time</div>
        </div>
      </div>
      <div className={styles.popularJobs}>
        <div className={styles.googleInc}>
          <img className={styles.buttonIcon} alt="" src="/rectangle2.svg" />
          <div className={styles.logoGoogle}>
            <div className={styles.rectangle} />
            <img className={styles.imegeIcon} alt="" src="/imege45@2x.png" />
          </div>
          <div className={styles.fullTime}>
            <div className={styles.rectangle1} />
            <div className={styles.text5}>Full time</div>
          </div>
          <div className={styles.design}>
            <div className={styles.rectangle2} />
            <div className={styles.text6}>technlogy</div>
          </div>
          <div className={styles.seniorDesigner3}>
            <div className={styles.rectangle3} />
            <div className={styles.text7}>Senior IT</div>
          </div>
          <div className={styles.save}>
            <div className={styles.button3} />
            <img className={styles.imegeIcon1} alt="" src="/imege46.svg" />
          </div>
          <div className={styles.text8}>25 minute ago</div>
          <div className={styles.text9}>Riyadh, KSA</div>
          <b className={styles.text10}>{`IT Senior   `}</b>
          <div className={styles.text11}>KACST</div>
          <div className={styles.imege} />
        </div>
        <div className={styles.googleInc1}>
          <img className={styles.buttonIcon} alt="" src="/rectangle2.svg" />
          <div className={styles.dribbbleLogo}>
            <div className={styles.rectangle4} />
            <div className={styles.imege1} />
            <img className={styles.imegeIcon2} alt="" src="/imege47@2x.png" />
          </div>
          <div className={styles.fullTime}>
            <div className={styles.rectangle5} />
            <div className={styles.text5}>Full time</div>
          </div>
          <div className={styles.design}>
            <div className={styles.rectangle6} />
            <div className={styles.text13}>technology</div>
          </div>
          <div className={styles.seniorDesigner3}>
            <div className={styles.rectangle7} />
            <div className={styles.text5}>Senior CYS </div>
          </div>
          <div className={styles.save}>
            <div className={styles.button3} />
            <img className={styles.imegeIcon1} alt="" src="/imege46.svg" />
          </div>
          <div className={styles.text8}>25 minute ago</div>
          <div className={styles.text16}>Riyadh, KSA</div>
          <b className={styles.text17}>Cyber security Senior</b>
          <div className={styles.text18}>STC inc</div>
          <div className={styles.imege} />
        </div>
        <div className={styles.googleInc2}>
          <img className={styles.buttonIcon} alt="" src="/rectangle2.svg" />
          <div className={styles.fullTime2}>
            <div className={styles.rectangle1} />
            <div className={styles.text5}>Full time</div>
          </div>
          <div className={styles.design2}>
            <div className={styles.rectangle2} />
            <div className={styles.text20}>Design</div>
          </div>
          <div className={styles.seniorDesigner5}>
            <div className={styles.rectangle3} />
            <div className={styles.text5}>Senior designer</div>
          </div>
          <div className={styles.text22}>25 minute ago</div>
          <div className={styles.text23}>California, USA</div>
          <b className={styles.text24}>UX Researcher</b>
          <div className={styles.text25}>Twitter inc</div>
          <div className={styles.imege3} />
        </div>
      </div>
      <div className={styles.button6}>
        <div className={styles.button3} />
        <img className={styles.imegeIcon4} alt="" src="/line15.svg" />
      </div>
      <img className={styles.menuBarIcon} alt="" src="/imege42.svg" />
    </div>
  );
};

export default Search;
