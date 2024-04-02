import { FunctionComponent } from "react";
import styles from "./Notifications2.module.css";

const Notifications2: FunctionComponent = () => {
  return (
    <div className={styles.notifications}>
      <div className={styles.dribbbleInc}>
        <img className={styles.dribbbleIncChild} alt="" src="/rectangle.svg" />
        <img className={styles.optionsIcon} alt="" src="/options.svg" />
        <div className={styles.seeNewJob}>
          <img className={styles.buttonIcon} alt="" src="/button.svg" />
          <div className={styles.text}>{`See new Training `}</div>
        </div>
        <div className={styles.text1}>1 Hour</div>
      </div>
      <div className={styles.twitterInc}>
        <img className={styles.twitterIncChild} alt="" src="/rectangle.svg" />
        <img className={styles.optionsIcon} alt="" src="/options.svg" />
        <img className={styles.optionsIcon2} alt="" src="/options.svg" />
        <div className={styles.seeJob}>
          <img className={styles.buttonIcon1} alt="" src="/button.svg" />
          <div className={styles.text2}>See training</div>
        </div>
        <div className={styles.text3}>6 Hours</div>
      </div>
      <div className={styles.facebookInc}>
        <img className={styles.twitterIncChild} alt="" src="/rectangle.svg" />
        <img className={styles.optionsIcon} alt="" src="/options.svg" />
        <img className={styles.optionsIcon2} alt="" src="/options.svg" />
        <div className={styles.seeJob}>
          <img className={styles.seeJobChild} alt="" src="/rectangle.svg" />
          <div className={styles.text4}>See job</div>
        </div>
        <div className={styles.text5}>1 day</div>
        <div className={styles.text6}>
          <span>{`Check out `}</span>
          <span className={styles.span}>5</span>
          <span>{` jobs similar to the one you saw recently : `}</span>
          <span className={styles.span}>UI/UX Designer</span>
          <span>{` on `}</span>
          <span className={styles.span}>Facebook</span>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.button1} />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.button2}>Read all</div>
      <b className={styles.text7}>Notifications</b>
      <div className={styles.googleInc}>
        <img className={styles.googleIncChild} alt="" src="/rectangle.svg" />
        <img className={styles.optionsIcon5} alt="" src="/options.svg" />
        <div className={styles.text8}>25 min</div>
        <div className={styles.text9}>
          Applications for KACST city have entered for company review
        </div>
        <b className={styles.text10}>Application sent</b>
        <b className={styles.text11}>Application sent</b>
        <img className={styles.optionsIcon6} alt="" src="/options.svg" />
        <div className={styles.applicationDetails}>
          <img className={styles.buttonIcon2} alt="" src="/button.svg" />
          <div className={styles.text12}>Application details</div>
        </div>
      </div>
      <div className={styles.logoGoogle}>
        <div className={styles.imege} />
        <img className={styles.imegeIcon} alt="" src="/imege@2x.png" />
      </div>
      <img className={styles.dribbbleLogoIcon} alt="" src="/imege@2x.png" />
      <div className={styles.text13}>
        <span>{`Applications for `}</span>
        <b className={styles.jarirCompanies}>Jarir companies</b>
        <span> have entered for company review</span>
      </div>
      <img className={styles.imageIcon} alt="" src="/twitter-logo@2x.png" />
      <div className={styles.text14}>
        Applications for Riyad Bank have entered for company review
      </div>
      <img className={styles.logoAppleIcon} alt="" src="/logo-apple@2x.png" />
    </div>
  );
};

export default Notifications2;
