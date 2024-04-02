import { FunctionComponent } from "react";
import styles from "./AddSkill1.module.css";

const AddSkill1: FunctionComponent = () => {
  return (
    <div className={styles.addSkill}>
      <div className={styles.back}>
        <div className={styles.button} />
        <img className={styles.lineIcon} alt="" src="/line1.svg" />
      </div>
      <div className={styles.addSkill1}>
        <div className={styles.textParent}>
          <div className={styles.text}>Graphic Design</div>
          <div className={styles.text1}>Graphic Thinking</div>
          <div className={styles.text2}>Ui/UX Design</div>
          <div className={styles.text3}>Adobe Indesign</div>
          <div className={styles.text4}>Web Design</div>
          <div className={styles.text5}>InDesign</div>
          <div className={styles.text6}>Canva Design</div>
          <div className={styles.text7}>User Interface Design</div>
          <div className={styles.text8}>Product Design</div>
          <div className={styles.text9}>User Experience Design</div>
        </div>
        <div className={styles.search}>
          <img className={styles.textboxIcon} alt="" src="/textbox1.svg" />
          <img className={styles.iconSearch} alt="" src="/icon-search1.svg" />
          <div className={styles.remove}>
            <div className={styles.text10}>Design</div>
            <img className={styles.buttonIcon} alt="" />
            <img className={styles.lineIcon1} alt="" src="/line11.svg" />
            <img className={styles.lineIcon1} alt="" src="/line12.svg" />
          </div>
        </div>
        <b className={styles.text11}>Add Skill</b>
      </div>
    </div>
  );
};

export default AddSkill1;
