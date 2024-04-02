import { FunctionComponent } from "react";
import styles from "./FieldOfStudy.module.css";

const FieldOfStudy: FunctionComponent = () => {
  return (
    <div className={styles.fieldOfStudy}>
      <div className={styles.button}>
        <div className={styles.button1} />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.addSkill}>
        <div className={styles.textParent}>
          <div className={styles.text}>Information Technology</div>
          <div className={styles.text1}>Business Information Systems</div>
          <div className={styles.text2}>Computer Information Science</div>
          <div className={styles.text3}>Computer Information Systems</div>
          <div className={styles.text4}>Healt Information Management</div>
          <div className={styles.text5}>History and Information</div>
          <div className={styles.text6}>Information Assurance</div>
          <div className={styles.text7}>Information Security</div>
          <div className={styles.text8}>Information Systems</div>
          <div className={styles.text9}>Information Systems Major</div>
        </div>
        <div className={styles.search}>
          <img className={styles.textboxIcon} alt="" src="/textbox.svg" />
          <img className={styles.iconSearch} alt="" src="/icon-search.svg" />
          <img className={styles.removeIcon} alt="" src="/button.svg" />
          <img className={styles.lineIcon1} alt="" src="/imege.svg" />
          <div className={styles.text10}>Information</div>
        </div>
        <b className={styles.text11}>Field of study</b>
      </div>
    </div>
  );
};

export default FieldOfStudy;
