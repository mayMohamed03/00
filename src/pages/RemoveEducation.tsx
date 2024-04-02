import { FunctionComponent } from "react";
import styles from "./RemoveEducation.module.css";

const RemoveEducation: FunctionComponent = () => {
  return (
    <div className={styles.removeEducation}>
      <img className={styles.removeIcon} alt="" src="/button.svg" />
      <div className={styles.addEducation}>
        <div className={styles.text}>Change Education</div>
        <div className={styles.jobTitle}>
          <img className={styles.jobTitleChild} alt="" src="/textbox.svg" />
          <div className={styles.text1}>Bachelor of Information Technology</div>
          <div className={styles.text2}>Level of education</div>
        </div>
        <div className={styles.company}>
          <img className={styles.jobTitleChild} alt="" src="/textbox.svg" />
          <div className={styles.text1}>University of Oxford</div>
          <div className={styles.text2}>Institution name</div>
        </div>
        <div className={styles.company1}>
          <img className={styles.jobTitleChild} alt="" src="/textbox.svg" />
          <div className={styles.text1}>Information Technology</div>
          <div className={styles.text2}>Field of study</div>
        </div>
        <div className={styles.startDate}>
          <img className={styles.startDateChild} alt="" src="/textbox.svg" />
          <div className={styles.text1}>Sep 2010</div>
          <div className={styles.text2}>Start date</div>
        </div>
        <div className={styles.startDate1}>
          <img className={styles.startDateItem} alt="" src="/button.svg" />
          <img className={styles.startDateInner} alt="" src="/rectangle.svg" />
          <div className={styles.text9}>This is my position now</div>
        </div>
        <div className={styles.description}>
          <img className={styles.descriptionChild} alt="" src="/textarea.svg" />
          <div className={styles.text10}>Write additional information here</div>
          <div className={styles.text2}>Description</div>
        </div>
        <div className={styles.endDate}>
          <img className={styles.startDateChild} alt="" src="/textbox.svg" />
          <div className={styles.text1}>Aug 2013</div>
          <div className={styles.text2}>End date</div>
        </div>
      </div>
      <div className={styles.buttonRemoveSave}>
        <div className={styles.button}>
          <div className={styles.buttonChild} />
          <div className={styles.text14}>Save</div>
        </div>
        <div className={styles.button1}>
          <div className={styles.buttonItem} />
          <div className={styles.text15}>Remove</div>
        </div>
      </div>
      <div className={styles.popUp}>
        <div className={styles.popUpChild} />
        <img className={styles.popUpItem} alt="" src="/rectangle.svg" />
        <div className={styles.buttonRemoveSave1}>
          <div className={styles.button2}>
            <div className={styles.button3} />
            <b className={styles.text16}>Continue Filling</b>
          </div>
          <div className={styles.button4}>
            <div className={styles.button5} />
          </div>
        </div>
        <div className={styles.text17}>
          Are you sure you want to delete this Training ?
        </div>
        <b className={styles.text18}>Remove Education ?</b>
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <b className={styles.text19}>Undo Changes</b>
    </div>
  );
};

export default RemoveEducation;
