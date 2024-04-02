import { FunctionComponent } from "react";
import DescriptionContainer from "../components/DescriptionContainer";
import styles from "./TrainingRequest1.module.css";

const TrainingRequest1: FunctionComponent = () => {
  return (
    <div className={styles.trainingRequest}>
      <div className={styles.back}>
        <div className={styles.backChild} />
        <img className={styles.lineIcon} alt="" src="/line6.svg" />
      </div>
      <div className={styles.addEducation}>
        <b className={styles.text}>{`Training request `}</b>
        <div className={styles.jobTitle}>
          <img className={styles.textboxIcon} alt="" src="/textbox2.svg" />
          <b className={styles.text1}>{`Studen name `}</b>
          <div className={styles.text2}>Sara Ali</div>
        </div>
        <div className={styles.jobTitle1}>
          <img className={styles.textboxIcon} alt="" src="/textbox2.svg" />
          <b className={styles.text1}>Field of study</b>
          <div className={styles.text2}>{`Information Technology `}</div>
        </div>
        <div className={styles.company}>
          <img className={styles.textboxIcon} alt="" src="/textbox2.svg" />
          <b className={styles.text1}>University ID</b>
          <div className={styles.text6}>442009446</div>
        </div>
        <div className={styles.startDate}>
          <img className={styles.textboxIcon3} alt="" src="/textbox3.svg" />
          <b className={styles.text1}>Start date</b>
        </div>
        <DescriptionContainer
          topicPromptText="Write additional information here"
          propTop="454px"
          propColor="#aaa5b9"
        />
        <div className={styles.endDate}>
          <img className={styles.textboxIcon3} alt="" src="/textbox3.svg" />
          <b className={styles.text8}>{`Trainin Duration  `}</b>
          <div className={styles.text2}>{`15 hours per week `}</div>
        </div>
        <div className={styles.description}>
          <img className={styles.textboxIcon} alt="" src="/textbox2.svg" />
          <img className={styles.lineIcon1} alt="" src="/line9.svg" />
          <div className={styles.text10}>966+</div>
          <div className={styles.text11}>050 345 7890</div>
          <img
            className={styles.descriptionChild}
            alt=""
            src="/rectangle42.svg"
          />
          <div className={styles.text12}>Phone number</div>
        </div>
        <div className={styles.text13}>sep2024</div>
      </div>
      <div className={styles.save}>
        <div className={styles.button} />
        <b className={styles.text14}>Save</b>
      </div>
    </div>
  );
};

export default TrainingRequest1;
