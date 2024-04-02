import { FunctionComponent } from "react";
import styles from "./NoMessage.module.css";

const NoMessage: FunctionComponent = () => {
  return (
    <div className={styles.noMessage}>
      <div className={styles.noSavings}>
        <b className={styles.text}>No Message</b>
        <div className={styles.text1}>
          You currently have no incoming messages thank you
        </div>
      </div>
      <div className={styles.findAJob}>
        <div className={styles.button} />
        <b className={styles.text2}>Create a message</b>
      </div>
      <img
        className={styles.illustrationIcon}
        alt=""
        src="/illustration@2x.png"
      />
      <img className={styles.menuBarIcon} alt="" src="/menu-bar.svg" />
    </div>
  );
};

export default NoMessage;
