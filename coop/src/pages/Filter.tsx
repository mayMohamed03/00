import { FunctionComponent } from "react";
import styles from "./Filter.module.css";

const Filter: FunctionComponent = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.jobType}>
        <b className={styles.text}>training type</b>
        <img className={styles.lineIcon} alt="" src="/line16.svg" />
        <img className={styles.jobTypeChild} alt="" src="/rectangle70.svg" />
        <div className={styles.fullTime}>
          <div className={styles.buttonhover} />
          <div className={styles.text1}>Part-time</div>
        </div>
        <div className={styles.fullTime1}>
          <div className={styles.buttonhover1} />
          <div className={styles.text1}> Contarct</div>
        </div>
        <div className={styles.fullTime2}>
          <div className={styles.buttonhover2} />
          <div className={styles.text3}> Full time</div>
        </div>
      </div>
      <div className={styles.position}>
        <img className={styles.jobTypeChild} alt="" src="/rectangle70.svg" />
        <img className={styles.lineIcon} alt="" src="/line16.svg" />
        <b className={styles.text}>Position level</b>
        <div className={styles.fullTime3}>
          <div className={styles.buttonhover3} />
          <div className={styles.text5}>Junior</div>
        </div>
        <div className={styles.fullTime4}>
          <div className={styles.buttonhover4} />
          <div className={styles.text5}>Senior</div>
        </div>
        <div className={styles.fullTime5}>
          <div className={styles.buttonhover5} />
          <div className={styles.text7}>student</div>
        </div>
      </div>
      <div className={styles.city}>
        <div className={styles.californiaUsa}>
          <div className={styles.text8}>Riyadh, KSA</div>
          <div className={styles.buttonhover6} />
          <img
            className={styles.californiaUsaChild}
            alt=""
            src="/rectangle71.svg"
          />
        </div>
        <div className={styles.californiaUsa1}>
          <div className={styles.text8}>jedah, KSA</div>
          <div className={styles.buttonhover7} />
        </div>
        <div className={styles.californiaUsa2}>
          <div className={styles.text8}> Khaber, KSA</div>
          <div className={styles.buttonhover7} />
        </div>
        <div className={styles.californiaUsa3}>
          <div className={styles.text8}>Makha, KSA</div>
          <div className={styles.buttonhover7} />
        </div>
        <img className={styles.jobTypeChild} alt="" src="/rectangle70.svg" />
        <img className={styles.lineIcon2} alt="" src="/line16.svg" />
        <b className={styles.text}>City</b>
      </div>
      <div className={styles.specialization}>
        <img className={styles.lineIcon3} alt="" src="/line16.svg" />
        <img className={styles.jobTypeChild} alt="" src="/rectangle70.svg" />
        <b className={styles.text}>Skills and Abilities</b>
        <div className={styles.design}>
          <div className={styles.text8}>Design</div>
          <div className={styles.buttonhover6} />
          <img
            className={styles.californiaUsaChild}
            alt=""
            src="/rectangle71.svg"
          />
        </div>
        <div className={styles.design1}>
          <div className={styles.text8}>Programmer</div>
          <div className={styles.buttonhover6} />
          <img
            className={styles.californiaUsaChild}
            alt=""
            src="/rectangle71.svg"
          />
        </div>
        <div className={styles.finance}>
          <div className={styles.text8}>Finance</div>
          <div className={styles.buttonhover7} />
        </div>
        <div className={styles.education}>
          <div className={styles.text8}>Education</div>
          <div className={styles.buttonhover7} />
        </div>
        <div className={styles.health}>
          <div className={styles.text8}>Health</div>
          <div className={styles.buttonhover7} />
        </div>
        <div className={styles.californiaUsa4}>
          <div className={styles.text8}>Restuarant</div>
          <div className={styles.buttonhover7} />
        </div>
      </div>
      <div className={styles.lastUpdate}>
        <div className={styles.lastWeek}>
          <div className={styles.text8}>Last week</div>
          <div className={styles.buttonhover16} />
        </div>
        <div className={styles.lastMonth}>
          <div className={styles.text8}>Last month</div>
          <div className={styles.buttonhover16} />
        </div>
        <div className={styles.lastWeek1}>
          <div className={styles.text8}>Any time</div>
          <div className={styles.buttonhover18} />
          <div className={styles.buttonhover19} />
        </div>
        <div className={styles.recent}>
          <div className={styles.text8}>Recent</div>
          <div className={styles.buttonhover16} />
        </div>
        <img className={styles.jobTypeChild} alt="" src="/rectangle70.svg" />
        <img className={styles.lineIcon2} alt="" src="/line16.svg" />
        <b className={styles.text}>Last update</b>
      </div>
      <div className={styles.typeOfWorkplace}>
        <div className={styles.hybrid}>
          <div className={styles.text8}>Hybrid</div>
          <div className={styles.buttonhover16} />
        </div>
        <div className={styles.remote}>
          <div className={styles.text8}>Remote</div>
          <div className={styles.buttonhover16} />
        </div>
        <div className={styles.onSite}>
          <div className={styles.text8}>On-site</div>
          <img className={styles.onSiteChild} alt="" src="/group-50.svg" />
        </div>
        <img className={styles.jobTypeChild} alt="" src="/rectangle70.svg" />
        <img className={styles.lineIcon5} alt="" src="/line16.svg" />
        <b className={styles.text}>Type of workplace</b>
      </div>
      <div className={styles.menuBar}>
        <img className={styles.rectangleIcon1} alt="" src="/rectangle68.svg" />
        <div className={styles.save}>
          <img className={styles.buttonIcon} alt="" src="/button24.svg" />
          <div className={styles.save1}>
            <div className={styles.button} />
            <div className={styles.text29}>Reset</div>
          </div>
        </div>
        <div className={styles.button1}>
          <img className={styles.buttonIcon1} alt="" src="/button25.svg" />
          <b className={styles.text30}>Apply Now</b>
        </div>
      </div>
      <div className={styles.button2}>
        <div className={styles.button} />
        <img className={styles.imegeIcon} alt="" src="/imege48.svg" />
      </div>
      <b className={styles.text31}>Filter</b>
    </div>
  );
};

export default Filter;
