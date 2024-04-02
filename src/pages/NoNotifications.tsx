import { FunctionComponent } from "react";
import styles from "./NoNotifications.module.css";

const NoNotifications: FunctionComponent = () => {
  return (
    <div className={styles.noNotifications}>
      <div className={styles.back}>
        <div className={styles.button} />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.noSavings}>
        <b className={styles.text}>No notifications</b>
        <div className={styles.text1}>
          You have no notifications at this time thank you
        </div>
      </div>
      <img
        className={styles.illustrationIcon}
        alt=""
        src="/illustration@2x.png"
      />
    </div>
  );
};

export default NoNotifications;
