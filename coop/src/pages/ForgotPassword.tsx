import { FunctionComponent } from "react";
import styles from "./ForgotPassword.module.css";

const ForgotPassword: FunctionComponent = () => {
  return (
    <div className={styles.forgotPassword}>
      <div className={styles.textbox}>
        <img className={styles.textboxIcon} alt="" src="/rectangle-59.svg" />
        <div className={styles.text}>{`Sara.ali@gmail.com `}</div>
        <b className={styles.text1}>Email</b>
      </div>
      <div className={styles.button}>
        <div className={styles.button1} />
        <b className={styles.text2}>Reset Password</b>
      </div>
      <div className={styles.button2}>
        <div className={styles.button3} />
        <b className={styles.text3}>Back to Login</b>
      </div>
      <div className={styles.text4}>
        To reset your password, you need your email or mobile number that can be
        authenticated
      </div>
      <b className={styles.text5}>Forgot Password?</b>
      <div className={styles.imege}>
        <div className={styles.imege1} />
        <div className={styles.imege2} />
        <img className={styles.imegeIcon} alt="" src="/imege36.svg" />
        <img className={styles.imegeIcon1} alt="" src="/imege37.svg" />
        <img className={styles.imegeIcon2} alt="" src="/imege38.svg" />
        <div className={styles.imege3} />
        <div className={styles.imege4} />
        <b className={styles.imege5}>?</b>
        <img className={styles.imegeIcon3} alt="" src="/imege39.svg" />
      </div>
    </div>
  );
};

export default ForgotPassword;
