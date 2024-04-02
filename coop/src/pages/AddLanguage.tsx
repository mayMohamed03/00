import { FunctionComponent } from "react";
import styles from "./AddLanguage.module.css";

const AddLanguage: FunctionComponent = () => {
  return (
    <div className={styles.addLanguage}>
      <div className={styles.back}>
        <div className={styles.button} />
        <img className={styles.lineIcon} alt="" src="/line13.svg" />
      </div>
      <div className={styles.addLanguage1}>
        <div className={styles.language}>
          <img className={styles.rectangleIcon} alt="" src="/rectangle65.svg" />
          <img className={styles.lineIcon1} alt="" src="/line14.svg" />
          <div className={styles.language1}>
            <div className={styles.text}>Arabic</div>
            <b className={styles.text1}>Language</b>
          </div>
          <div className={styles.firstLanguage}>
            <b className={styles.text2}>First language</b>
            <img className={styles.selectIcon} alt="" src="/group-50.svg" />
          </div>
        </div>
        <div className={styles.proficiencyLevel}>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle66.svg"
          />
          <img className={styles.lineIcon2} alt="" src="/line14.svg" />
          <div className={styles.written}>
            <b className={styles.text2}>Written</b>
            <div className={styles.textbox}>
              Choose your speaking skill level
            </div>
          </div>
          <div className={styles.oral}>
            <b className={styles.text2}>Oral</b>
            <div className={styles.textbox}>level 10</div>
          </div>
        </div>
        <div className={styles.text5}>
          Proficiency level : 0 - Poor, 10 - Very good
        </div>
        <b className={styles.text6}>Add Language</b>
      </div>
      <div className={styles.save}>
        <div className={styles.button1} />
        <b className={styles.text7}>Save</b>
      </div>
      <img className={styles.imegeIcon} alt="" src="/rectangle62@2x.png" />
    </div>
  );
};

export default AddLanguage;
