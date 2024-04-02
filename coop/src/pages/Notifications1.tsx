import { FunctionComponent } from "react";
import styles from "./Notifications1.module.css";

const Notifications1: FunctionComponent = () => {
  return (
    <div className={styles.notifications}>
      <div className={styles.googleInc}>
        <img className={styles.googleIncChild} alt="" src="/rectangle-6.svg" />
        <img className={styles.optionsIcon} alt="" src="/options2.svg" />
        <div className={styles.text}>25 min</div>
        <div className={styles.text1}>
          Applications for KACST city have entered for company review
        </div>
        <b className={styles.text2}>Application sent</b>
        <img className={styles.optionsIcon1} alt="" src="/options4.svg" />
        <div className={styles.applicationDetails}>
          <img className={styles.buttonIcon} alt="" src="/button7.svg" />
          <div className={styles.text3}>Application details</div>
        </div>
      </div>
      <div className={styles.dribbbleInc}>
        <img
          className={styles.dribbbleIncChild}
          alt=""
          src="/rectangle29.svg"
        />
        <img className={styles.optionsIcon} alt="" src="/options2.svg" />
        <div className={styles.text4}>1 Hour</div>
        <img className={styles.optionsIcon1} alt="" src="/options4.svg" />
        <div className={styles.seeNewJob}>
          <img className={styles.buttonIcon1} alt="" src="/button8.svg" />
          <div className={styles.text5}>{`See new Training `}</div>
        </div>
        <div className={styles.text6}>
          Applications for Jarir companies have entered for company review
        </div>
      </div>
      <div className={styles.twitterInc}>
        <img
          className={styles.dribbbleIncChild}
          alt=""
          src="/rectangle29.svg"
        />
        <img className={styles.optionsIcon} alt="" src="/options2.svg" />
        <div className={styles.text7}>6 Hours</div>
        <img className={styles.optionsIcon1} alt="" src="/options4.svg" />
        <div className={styles.seeJob}>
          <img className={styles.buttonIcon2} alt="" src="/button9.svg" />
          <div className={styles.text8}>{`See Training `}</div>
        </div>
      </div>
      <div className={styles.facebookInc}>
        <img
          className={styles.dribbbleIncChild}
          alt=""
          src="/rectangle29.svg"
        />
        <img className={styles.optionsIcon1} alt="" src="/options4.svg" />
        <div className={styles.seeJob1}>
          <img className={styles.buttonIcon2} alt="" src="/button9.svg" />
          <div className={styles.text8}>{`See Training `}</div>
        </div>
        <div className={styles.text10}>1 Day</div>
      </div>
      <div className={styles.appleInc}>
        <img
          className={styles.dribbbleIncChild}
          alt=""
          src="/rectangle29.svg"
        />
        <img className={styles.optionsIcon} alt="" src="/options2.svg" />
        <div className={styles.text11}>12 Feb 2022</div>
        <b className={styles.text12}>Application sent</b>
        <div className={styles.text13}>
          <span>{`Applications for `}</span>
          <span className={styles.appleInc1}>Apple inc</span>
          <span> have entered for company review</span>
        </div>
        <img className={styles.optionsIcon1} alt="" src="/options4.svg" />
        <div className={styles.applicationDetails1}>
          <img className={styles.buttonIcon} alt="" src="/rectangle30.svg" />
          <div className={styles.text3}>Application details</div>
        </div>
      </div>
      <div className={styles.back}>
        <div className={styles.backChild} />
        <img className={styles.lineIcon} alt="" src="/line1.svg" />
      </div>
      <div className={styles.text15}>Read all</div>
      <b className={styles.text16}>Notifications</b>
      <div className={styles.logoGoogle}>
        <div className={styles.imege} />
        <img className={styles.imegeIcon} alt="" src="/imege32@2x.png" />
      </div>
      <img className={styles.dribbbleLogoIcon} alt="" src="/imege31@2x.png" />
      <img className={styles.imegeIcon1} alt="" src="/twitter-logo@2x.png" />
      <div className={styles.text17}>
        Applications for Riyad Bank have entered for company review
      </div>
      <img className={styles.logoAppleIcon} alt="" src="/logo-apple1@2x.png" />
      <div className={styles.text18}>
        Applications for Apple companies have entered for company review
      </div>
      <img
        className={styles.logoFacebookIcon}
        alt=""
        src="/logo-facebook@2x.png"
      />
    </div>
  );
};

export default Notifications1;
