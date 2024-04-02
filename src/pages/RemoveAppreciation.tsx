import { FunctionComponent } from "react";
import styles from "./RemoveAppreciation.module.css";

const RemoveAppreciation: FunctionComponent = () => {
  return (
    <div className={styles.removeAppreciation}>
      <img className={styles.removeIcon} alt="" src="/button.svg" />
      <div className={styles.addWorkExperience}>
        <div className={styles.text}>Edit Appreciation</div>
        <div className={styles.jobTitle}>
          <img className={styles.jobTitleChild} alt="" src="/textbox.svg" />
          <div className={styles.text1}>Wireless Symposium (RWS)</div>
          <div className={styles.text2}>Award name</div>
        </div>
        <div className={styles.company}>
          <img className={styles.jobTitleChild} alt="" src="/textbox.svg" />
          <div className={styles.text1}>Young Scientist</div>
          <div className={styles.text2}>Category/Achievement achieved</div>
        </div>
        <div className={styles.description}>
          <img className={styles.descriptionChild} alt="" src="/textarea.svg" />
          <div className={styles.text5}>Write additional information here</div>
          <div className={styles.text2}>Description</div>
        </div>
        <div className={styles.endDate}>
          <img className={styles.endDateChild} alt="" src="/textbox.svg" />
          <div className={styles.text1}>2022</div>
          <div className={styles.text2}>End date</div>
        </div>
      </div>
      <div className={styles.buttonRemoveSave}>
        <div className={styles.button}>
          <div className={styles.buttonChild} />
          <div className={styles.text9}>Save</div>
        </div>
        <div className={styles.button1}>
          <div className={styles.buttonItem} />
          <div className={styles.text10}>Remove</div>
        </div>
      </div>
      <div className={styles.popUp}>
        <div className={styles.popUpChild} />
        <img className={styles.popUpItem} alt="" src="/rectangle.svg" />
        <div className={styles.buttonRemoveSave1}>
          <div className={styles.save}>
            <div className={styles.button2} />
            <b className={styles.continueFilling}>Continue Filling</b>
          </div>
          <div className={styles.remove}>
            <div className={styles.removeChild} />
          </div>
        </div>
        <div className={styles.text11}>
          Are you sure you want to remove this award?
        </div>
        <b className={styles.text12}>Remove Appreciation ?</b>
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <b className={styles.text13}>Undo Changes</b>
    </div>
  );
};

export default RemoveAppreciation;
