import { FunctionComponent } from "react";
import styles from "./Settings.module.css";

const Settings: FunctionComponent = () => {
  return (
    <div className={styles.settings}>
      <div className={styles.notifications}>
        <img
          className={styles.notificationsChild}
          alt=""
          src="/rectangle.svg"
        />
        <img className={styles.notificationsItem} alt="" src="/group-45.svg" />
        <div className={styles.text}>Notifications</div>
        <img className={styles.selectIcon} alt="" src="/select.svg" />
        <img className={styles.selectIcon1} alt="" />
      </div>
      <div className={styles.darkMode}>
        <img
          className={styles.notificationsChild}
          alt=""
          src="/rectangle.svg"
        />
        <img className={styles.icon} alt="" src="/icon@2x.png" />
        <div className={styles.text}>Dark mode</div>
        <img className={styles.darkModeItem} alt="" src="/group-43@2x.png" />
        <img className={styles.selectIcon1} alt="" />
      </div>
      <div className={styles.password}>
        <img
          className={styles.notificationsChild}
          alt=""
          src="/rectangle.svg"
        />
        <img className={styles.notificationsItem} alt="" src="/icon.svg" />
        <div className={styles.text}>Password</div>
        <img className={styles.selectIcon3} alt="" src="/select.svg" />
        <img className={styles.selectIcon1} alt="" />
      </div>
      <div className={styles.logOut}>
        <img
          className={styles.notificationsChild}
          alt=""
          src="/rectangle.svg"
        />
        <img className={styles.notificationsItem} alt="" src="/icon.svg" />
        <div className={styles.text}>Logout</div>
        <img className={styles.selectIcon3} alt="" src="/select.svg" />
        <img className={styles.selectIcon1} alt="" />
      </div>
      <div className={styles.save}>
        <div className={styles.button} />
        <b className={styles.text4}>Save</b>
      </div>
      <div className={styles.back}>
        <div className={styles.backChild} />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.text5}>Settings</div>
    </div>
  );
};

export default Settings;
