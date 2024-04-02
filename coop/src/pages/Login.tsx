import { FunctionComponent } from "react";
import TextBox from "../components/TextBox";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  return (
    <div className={styles.login}>
      <TextBox
        text="Sara.ali@gmail.com "
        text1="Email"
        rectangle59="/textbox1.svg"
      />
      <div className={styles.textbox}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-59.svg" />
        <img className={styles.imegeIcon} alt="" src="/imege@2x.png" />
        <img
          className={styles.hiddenPasswordIcon}
          alt=""
          src="/hidden-password.svg"
        />
        <div className={styles.text}>Password</div>
      </div>
      <div className={styles.button}>
        <img className={styles.buttonIcon} alt="" src="/button.svg" />
        <div className={styles.text1}>Remember me</div>
      </div>
      <div className={styles.button1}>
        <div className={styles.button2} />
        <b className={styles.text2}>Login</b>
      </div>
      <div className={styles.button3}>
        <div className={styles.button4} />
        <b className={styles.text3}>Sign in with Google</b>
        <img className={styles.imegeIcon1} alt="" src="/imege1@2x.png" />
      </div>
      <div className={styles.text4}>Forgot Password ?</div>
      <div className={styles.text5}>
        <span className={styles.youDontHave}>{`You don't have an `}</span>
        <span className={styles.account}>account</span>
        <span className={styles.youDontHave}> yet?</span>
        <span className={styles.span}>{`  `}</span>
        <span className={styles.signUp}>Sign up</span>
      </div>
      <b className={styles.text6}>Welcome Back</b>
    </div>
  );
};

export default Login;
