import { FunctionComponent } from "react";
import styles from "./UndoChanges1.module.css";

const UndoChanges1: FunctionComponent = () => {
  return (
    <div className={styles.undoChanges}>
      <img className={styles.removeIcon} alt="" src="/button.svg" />
      <div className={styles.aboutMe}>
        <img className={styles.aboutMeChild} alt="" src="/textarea.svg" />
        <div className={styles.text}>Tell me about you.</div>
        <b className={styles.text1}>About me</b>
      </div>
      <div className={styles.save}>
        <div className={styles.saveChild} />
        <div className={styles.text2}>Save</div>
      </div>
      <div className={styles.popUp}>
        <div className={styles.popUpChild} />
        <img className={styles.popUpItem} alt="" src="/rectangle.svg" />
        <div className={styles.buttonRemoveSave}>
          <div className={styles.button}>
            <div className={styles.button1} />
            <b className={styles.text3}>Continue Filling</b>
          </div>
          <div className={styles.button2}>
            <div className={styles.button3} />
          </div>
        </div>
        <div className={styles.text4}>
          Are you sure you want to change what you entered?
        </div>
        <b className={styles.text5}>Undo Changes ?</b>
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <b className={styles.text6}>Undo Changes</b>
    </div>
  );
};

export default UndoChanges1;
