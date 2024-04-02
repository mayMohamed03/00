import { FunctionComponent } from "react";
import styles from "./UpdatePassword.module.css";

const UpdatePassword: FunctionComponent = () => {
  return (
    <div className={styles.updatePassword}>
      <div className={styles.save}>
        <div className={styles.button} />
        <b className={styles.text}>Update</b>
      </div>
      <div className={styles.back}>
        <div className={styles.backChild} />
        <img className={styles.lineIcon} alt="" src="/line1.svg" />
      </div>
      <div className={styles.oldPassword}>
        <div className={styles.jobTitle}>
          <img className={styles.jobTitleChild} alt="" src="/textbox2.svg" />
          <img className={styles.iconEye} alt="" src="/imege@2x.png" />
          <img
            className={styles.hiddenPasswordIcon}
            alt=""
            src="/hidden-password1.svg"
          />
          <div className={styles.text1}>Old Password</div>
        </div>
      </div>
      <div className={styles.newPassword}>
        <div className={styles.jobTitle}>
          <img className={styles.jobTitleChild} alt="" src="/textbox2.svg" />
          <img className={styles.iconEye} alt="" src="/imege@2x.png" />
          <img
            className={styles.hiddenPasswordIcon}
            alt=""
            src="/hidden-password1.svg"
          />
          <div className={styles.text1}>New Password</div>
        </div>
      </div>
      <div className={styles.confirmPassword}>
        <div className={styles.jobTitle}>
          <img className={styles.jobTitleChild} alt="" src="/textbox2.svg" />
          <img className={styles.iconEye} alt="" src="/imege@2x.png" />
          <img
            className={styles.hiddenPasswordIcon}
            alt=""
            src="/hidden-password1.svg"
          />
          <div className={styles.text1}>Confirm Password</div>
        </div>
      </div>
      <div className={styles.text4}>Update Password</div>
    </div>
  );
};

export default UpdatePassword;
