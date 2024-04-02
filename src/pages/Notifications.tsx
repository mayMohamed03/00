import { FunctionComponent } from "react";
import styles from "./Notifications.module.css";

const Notifications: FunctionComponent = () => {
  return (
    <div className={styles.notifications}>
      <div className={styles.googleInc}>
        <img className={styles.googleIncChild} alt="" src="/rectangle.svg" />
        <div className={styles.logoGoogle}>
          <div className={styles.imege} />
          <img className={styles.imegeIcon} alt="" src="/imege@2x.png" />
        </div>
        <img className={styles.optionsIcon} alt="" src="/options.svg" />
        <div className={styles.text}>25 minutes ago</div>
        <div className={styles.button}>Delete</div>
        <b className={styles.text1}>Application sent</b>
        <div className={styles.text2}>
          Applications for KACST city have entered for company review
        </div>
      </div>
      <div className={styles.googleInc1}>
        <img className={styles.googleIncItem} alt="" src="/rectangle.svg" />
        <img className={styles.dribbbleLogoIcon} alt="" src="/imege@2x.png" />
        <img className={styles.optionsIcon1} alt="" src="/options.svg" />
        <div className={styles.text3}>45 minutes ago</div>
        <div className={styles.button}>Delete</div>
        <b className={styles.text1}>Application sent</b>
        <div className={styles.text5}>
          Applications for Jarir companies have entered for company review
        </div>
      </div>
      <div className={styles.googleInc2}>
        <img className={styles.googleIncItem} alt="" src="/rectangle.svg" />
        <img className={styles.imageIcon} alt="" src="/twitter-logo@2x.png" />
        <img className={styles.optionsIcon1} alt="" src="/options.svg" />
        <div className={styles.text3}>5 Hours ago</div>
        <div className={styles.button}>Delete</div>
        <b className={styles.text1}>Application sent</b>
        <div className={styles.text2}>
          Applications for Riyad Bank have entered for company review
        </div>
      </div>
      <div className={styles.googleInc3}>
        <img className={styles.googleIncItem} alt="" src="/rectangle.svg" />
        <img className={styles.logoAppleIcon} alt="" src="/logo-apple@2x.png" />
        <img className={styles.optionsIcon1} alt="" src="/options.svg" />
        <div className={styles.text3}>1 Day ago</div>
        <div className={styles.button}>Delete</div>
        <b className={styles.text1}>Application sent</b>
        <div className={styles.text2}>
          Applications for Apple companies have entered for company review
        </div>
      </div>
      <div className={styles.googleInc4}>
        <img className={styles.googleIncItem} alt="" src="/rectangle.svg" />
        <img
          className={styles.logoFacebookIcon}
          alt=""
          src="/logo-facebook@2x.png"
        />
        <img className={styles.optionsIcon1} alt="" src="/options.svg" />
        <div className={styles.text12}>12 February 2022</div>
        <div className={styles.button4}>Delete</div>
        <b className={styles.text1}>Application sent</b>
        <div className={styles.text14}>
          Applications for Technical and Vacational Training corporation have
          entered for company review
        </div>
      </div>
      <div className={styles.back}>
        <div className={styles.button5} />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <b className={styles.text15}>Notifications</b>
      <div className={styles.button6}>Read all</div>
    </div>
  );
};

export default Notifications;
