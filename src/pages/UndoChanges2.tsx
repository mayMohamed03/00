import { FunctionComponent } from "react";
import styles from "./UndoChanges2.module.css";

const UndoChanges2: FunctionComponent = () => {
  return (
    <div className={styles.undoChanges}>
      <img className={styles.removeIcon} alt="" src="/button.svg" />
      <div className={styles.addWorkExperience}>
        <b className={styles.text}>Change work experience</b>
        <div className={styles.jobTitle}>
          <img className={styles.jobTitleChild} alt="" src="/textbox.svg" />
          <div className={styles.text1}>Manager</div>
          <b className={styles.text2}>Job title</b>
        </div>
        <div className={styles.company}>
          <img className={styles.jobTitleChild} alt="" src="/textbox.svg" />
          <div className={styles.text1}>Amazon Inc</div>
          <b className={styles.text2}>Company</b>
        </div>
        <div className={styles.startDate}>
          <img className={styles.startDateChild} alt="" src="/textbox.svg" />
          <div className={styles.text1}>Jan 2015</div>
          <b className={styles.text2}>Start date</b>
        </div>
        <div className={styles.startDate1}>
          <img className={styles.startDateItem} alt="" src="/button.svg" />
          <img className={styles.startDateInner} alt="" src="/rectangle.svg" />
          <div className={styles.text7}>This is my position now</div>
        </div>
        <div className={styles.description}>
          <img className={styles.descriptionChild} alt="" src="/textarea.svg" />
          <div className={styles.text8}>Write additional information here</div>
          <b className={styles.text2}>Description</b>
        </div>
        <div className={styles.endDate}>
          <img className={styles.startDateChild} alt="" src="/textbox.svg" />
          <div className={styles.text1}>Feb 2024</div>
          <b className={styles.text2}>End date</b>
        </div>
      </div>
      <div className={styles.buttonRemoveSave}>
        <div className={styles.button}>
          <div className={styles.buttonChild} />
          <div className={styles.text12}>Save</div>
        </div>
        <div className={styles.button1}>
          <div className={styles.buttonItem} />
          <div className={styles.text13}>Remove</div>
        </div>
      </div>
      <div className={styles.popUp}>
        <div className={styles.popUpChild} />
        <img className={styles.popUpItem} alt="" src="/rectangle.svg" />
        <div className={styles.buttonRemoveSave1}>
          <div className={styles.save}>
            <div className={styles.button2} />
            <b className={styles.text14}>Continue Filling</b>
          </div>
          <div className={styles.remove}>
            <div className={styles.button3} />
            <b className={styles.text15}>Undo Changes</b>
          </div>
        </div>
        <div className={styles.text16}>
          Are you sure you want to change what you entered?
        </div>
        <b className={styles.text17}>Undo Changes ?</b>
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
    </div>
  );
};

export default UndoChanges2;
