import { FunctionComponent } from "react";
import styles from "./CheckYourEmail.module.css";

const CheckYourEmail: FunctionComponent = () => {
  return (
    <div className={styles.checkYourEmail}>
      <div className={styles.button}>
        <div className={styles.button1} />
        <b className={styles.text}>Open Your Email</b>
      </div>
      <div className={styles.button2}>
        <div className={styles.button3} />
        <b className={styles.text1}>Back to Login</b>
      </div>
      <div className={styles.text2}>
        We have sent the reset password to the email address
        brandonelouis@gmial.com
      </div>
      <div className={styles.text3}>
        <span
          className={styles.youHaveNot}
        >{`You have not received the email?  `}</span>
        <span className={styles.resend}>Resend</span>
      </div>
      <b className={styles.text4}>Check Your Email</b>
      <img className={styles.imegeIcon} alt="" src="/imege41.svg" />
    </div>
  );
};

export default CheckYourEmail;
