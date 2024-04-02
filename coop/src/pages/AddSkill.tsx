import { FunctionComponent } from "react";
import styles from "./AddSkill.module.css";

const AddSkill: FunctionComponent = () => {
  return (
    <div className={styles.addSkill}>
      <div className={styles.back}>
        <div className={styles.button} />
        <img className={styles.lineIcon} alt="" src="/line1.svg" />
      </div>
      <div className={styles.save}>
        <div className={styles.button1} />
        <b className={styles.text}>Save</b>
      </div>
      <div className={styles.addSkill1}>
        <b className={styles.text1}>Add Skill</b>
        <div className={styles.leadershipParent}>
          <div className={styles.leadership}>
            <img
              className={styles.leadershipChild}
              alt=""
              src="/rectangle45.svg"
            />
            <img className={styles.removeIcon} alt="" src="/button5.svg" />
            <div className={styles.text2}>Leadership</div>
          </div>
          <div className={styles.teamwork}>
            <img
              className={styles.teamworkChild}
              alt=""
              src="/rectangle46.svg"
            />
            <div className={styles.text2}>Teamwork</div>
            <img className={styles.removeIcon1} alt="" src="/button5.svg" />
          </div>
          <div className={styles.targetOriented}>
            <img
              className={styles.targetOrientedChild}
              alt=""
              src="/rectangle47.svg"
            />
            <div className={styles.text2}>Target oriented</div>
            <img className={styles.removeIcon2} alt="" src="/button5.svg" />
          </div>
          <div className={styles.targetOriented1}>
            <img
              className={styles.targetOrientedItem}
              alt=""
              src="/rectangle48.svg"
            />
            <div className={styles.text2}>Responsibility</div>
            <img className={styles.removeIcon3} alt="" src="/remove.svg" />
          </div>
          <div className={styles.goodCommunicationSkills}>
            <img
              className={styles.goodCommunicationSkillsChild}
              alt=""
              src="/rectangle49.svg"
            />
            <div className={styles.text2}>Good communication skills</div>
            <img className={styles.removeIcon4} alt="" src="/button5.svg" />
          </div>
          <div className={styles.consistent}>
            <img
              className={styles.consistentChild}
              alt=""
              src="/rectangle50.svg"
            />
            <div className={styles.text2}>Consistent</div>
            <img className={styles.removeIcon5} alt="" src="/button5.svg" />
          </div>
          <div className={styles.english}>
            <img
              className={styles.englishChild}
              alt=""
              src="/rectangle51.svg"
            />
            <div className={styles.text2}>English</div>
            <img className={styles.removeIcon6} alt="" src="/button5.svg" />
          </div>
          <div className={styles.visioner}>
            <img
              className={styles.visionerChild}
              alt=""
              src="/rectangle52.svg"
            />
            <div className={styles.text2}>Visioner</div>
            <img className={styles.removeIcon7} alt="" src="/button5.svg" />
          </div>
        </div>
        <div className={styles.search}>
          <img className={styles.textboxIcon} alt="" src="/textbox1.svg" />
          <img className={styles.iconSearch} alt="" src="/icon-search1.svg" />
          <div className={styles.text10}>Search skills</div>
        </div>
      </div>
    </div>
  );
};

export default AddSkill;
