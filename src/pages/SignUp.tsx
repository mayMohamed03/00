import { FunctionComponent } from "react";
import TextBox from "../components/TextBox";
import styles from "./SignUp.module.css";

const SignUp: FunctionComponent = () => {
  return (
    <div className={styles.signUp}>
      <TextBox
        text="Sara.ali@gmail.com "
        text1="Email"
        rectangleIconTop="344px"
        textLeft="15px"
        rectangle59="/rectangle-59.svg"
      />
      <TextBox
        text="Sara Ali  "
        text1="Full name"
        rectangleIconTop="254px"
        textLeft="25px"
        rectangle59="/rectangle-59.svg"
      />
      <div className={styles.textbox}>
        <img className={styles.textboxIcon} alt="" src="/rectangle-59.svg" />
        <img className={styles.buttonIcon} alt="" src="/imege@2x.png" />
        <img
          className={styles.hiddenPasswordIcon}
          alt=""
          src="/hidden-password.svg"
        />
        <b className={styles.text}>Password</b>
      </div>
      <div className={styles.button}>
        <img className={styles.buttonIcon1} alt="" src="/button.svg" />
        <div className={styles.text1}>Remember me</div>
      </div>
      <div className={styles.button1}>
        <div className={styles.button2} />
        <b className={styles.text2}>Sign up</b>
      </div>
      <div className={styles.button3}>
        <div className={styles.button4} />
        <b className={styles.text3}>Sign up with Google</b>
        <img className={styles.imegeIcon} alt="" src="/imege@2x.png" />
      </div>
      <div className={styles.button5}>Forgot Password ?</div>
      <div className={styles.button6}>
        <span
          className={styles.youDontHave}
        >{`You don't have an account yet?  `}</span>
        <span className={styles.signIn}>Sign in</span>
      </div>
      <b className={styles.text4}>Create an Account</b>
    </div>
  );
};

export default SignUp;
