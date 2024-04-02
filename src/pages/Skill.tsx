import { FunctionComponent } from "react";
import styles from "./Skill.module.css";

const Skill: FunctionComponent = () => {
  return (
    <div className={styles.skill8}>
      <div className={styles.back}>
        <div className={styles.backChild} />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.change}>
        <div className={styles.button} />
        <b className={styles.text}>Change</b>
      </div>
      <div className={styles.skill}>
        <b className={styles.text1}>Skill (8)</b>
        <div className={styles.leadershipParent}>
          <div className={styles.leadership}>
            <img
              className={styles.leadershipChild}
              alt=""
              src="/rectangle.svg"
            />
            <img className={styles.removeIcon} alt="" src="/button.svg" />
            <div className={styles.text2}>Leadership</div>
          </div>
          <div className={styles.teamwork}>
            <img className={styles.teamworkChild} alt="" src="/rectangle.svg" />
            <div className={styles.text2}>Teamwork</div>
            <img className={styles.removeIcon1} alt="" src="/button.svg" />
          </div>
          <div className={styles.targetOriented}>
            <img
              className={styles.targetOrientedChild}
              alt=""
              src="/rectangle.svg"
            />
            <div className={styles.text2}>Target oriented</div>
            <img className={styles.removeIcon2} alt="" src="/button.svg" />
          </div>
          <div className={styles.targetOriented1}>
            <img
              className={styles.targetOrientedItem}
              alt=""
              src="/rectangle.svg"
            />
            <div className={styles.text2}>Responsibility</div>
            <img className={styles.removeIcon3} alt="" src="/button.svg" />
          </div>
          <div className={styles.goodCommunicationSkills}>
            <img
              className={styles.goodCommunicationSkillsChild}
              alt=""
              src="/rectangle.svg"
            />
            <div className={styles.text2}>Good communication skills</div>
            <img className={styles.removeIcon4} alt="" src="/button.svg" />
          </div>
          <div className={styles.consistent}>
            <img
              className={styles.consistentChild}
              alt=""
              src="/rectangle.svg"
            />
            <div className={styles.text2}>Consistent</div>
            <img className={styles.removeIcon5} alt="" src="/button.svg" />
          </div>
          <div className={styles.english}>
            <img className={styles.englishChild} alt="" src="/rectangle.svg" />
            <div className={styles.text2}>English</div>
            <img className={styles.removeIcon6} alt="" src="/button.svg" />
          </div>
          <div className={styles.visioner}>
            <img className={styles.visionerChild} alt="" src="/rectangle.svg" />
            <div className={styles.text2}>Visioner</div>
            <img className={styles.removeIcon7} alt="" src="/button.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
