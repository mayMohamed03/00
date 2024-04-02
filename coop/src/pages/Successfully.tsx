import { FunctionComponent } from "react";
import styles from "./Successfully.module.css";

const Successfully: FunctionComponent = () => {
  return (
    <div className={styles.successfully}>
      <div className={styles.button}>
        <div className={styles.button1} />
        <b className={styles.text}>Continue</b>
      </div>
      <div className={styles.button2}>
        <div className={styles.button3} />
        <b className={styles.text1}>Back to Login</b>
      </div>
      <div className={styles.text2}>
        Your password has been updated, please change your password regularly to
        avoid this happening
      </div>
      <b className={styles.text3}>Successfully</b>
      <img className={styles.imegeIcon} alt="" src="/imege40.svg" />
    </div>
  );
};

export default Successfully;
