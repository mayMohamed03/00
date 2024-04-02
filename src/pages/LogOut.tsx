import { FunctionComponent } from "react";
import styles from "./LogOut.module.css";

const LogOut: FunctionComponent = () => {
  return (
    <div className={styles.logOut}>
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
      <div className={styles.logout}>
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
        <div className={styles.saveChild} />
        <div className={styles.text4}>Save</div>
      </div>
      <div className={styles.back}>
        <div className={styles.backChild} />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.text5}>Settings</div>
      <div className={styles.popUp}>
        <div className={styles.popUpChild} />
        <img className={styles.popUpItem} alt="" src="/rectangle.svg" />
        <div className={styles.buttonRemoveSave}>
          <div className={styles.button}>
            <div className={styles.button1} />
            <b className={styles.text6}>Yes</b>
          </div>
          <div className={styles.button2}>
            <div className={styles.button3} />
            <b className={styles.text7}>Cancel</b>
          </div>
        </div>
        <div className={styles.text8}>Are you sure you want to leave?</div>
        <b className={styles.text9}>Log out</b>
        <img className={styles.lineIcon1} alt="" src="/line.svg" />
      </div>
    </div>
  );
};

export default LogOut;
