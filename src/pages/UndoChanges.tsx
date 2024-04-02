import { FunctionComponent } from "react";
import styles from "./UndoChanges.module.css";

const UndoChanges: FunctionComponent = () => {
  return (
    <div className={styles.undoChanges}>
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
          <div className={styles.button1} />
          <div className={styles.textve}>Save</div>
        </div>
        <div className={styles.button2}>
          <div className={styles.button3} />
          <div className={styles.text9}>Remove</div>
        </div>
      </div>
      <div className={styles.popUp}>
        <div className={styles.popUpChild} />
        <img className={styles.popUpItem} alt="" src="/rectangle.svg" />
        <div className={styles.buttonRemoveSave1}>
          <div className={styles.button4}>
            <div className={styles.button5} />
            <b className={styles.text10}>Continue Filling</b>
          </div>
          <div className={styles.button6}>
            <div className={styles.button7} />
          </div>
        </div>
        <div className={styles.text11}>
          Are you sure you want to change what you entered?
        </div>
        <b className={styles.text12}>Undo Changes ?</b>
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <b className={styles.text13}>Undo Changes</b>
    </div>
  );
};

export default UndoChanges;
