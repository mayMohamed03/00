import { FunctionComponent } from "react";
import styles from "./UndoChanges3.module.css";

const UndoChanges3: FunctionComponent = () => {
  return (
    <div className={styles.undoChanges}>
      <img className={styles.removeIcon} alt="" src="/button3.svg" />
      <div className={styles.addEducation}>
        <div className={styles.text}>Change Education</div>
        <div className={styles.jobTitle}>
          <img className={styles.jobTitleChild} alt="" src="/textbox2.svg" />
          <div className={styles.text1}>Bachelor of Information Technology</div>
          <div className={styles.text2}>Level of education</div>
        </div>
        <div className={styles.company}>
          <img className={styles.jobTitleChild} alt="" src="/textbox2.svg" />
          <div className={styles.text1}>University of Oxford</div>
          <div className={styles.text2}>Institution name</div>
        </div>
        <div className={styles.company1}>
          <img className={styles.jobTitleChild} alt="" src="/textbox2.svg" />
          <div className={styles.text1}>Information Technology</div>
          <div className={styles.text2}>Field of study</div>
        </div>
        <div className={styles.startDate}>
          <img className={styles.startDateChild} alt="" src="/textbox3.svg" />
          <div className={styles.text1}>Sep 2010</div>
          <div className={styles.text2}>Start date</div>
        </div>
        <div className={styles.startDate1}>
          <img className={styles.startDateItem} alt="" src="/button14.svg" />
          <img
            className={styles.startDateInner}
            alt=""
            src="/rectangle41.svg"
          />
          <div className={styles.text9}>This is my position now</div>
        </div>
        <div className={styles.description}>
          <img
            className={styles.descriptionChild}
            alt=""
            src="/textarea1.svg"
          />
          <div className={styles.text10}>Write additional information here</div>
          <div className={styles.text2}>Description</div>
        </div>
        <div className={styles.endDate}>
          <img className={styles.startDateChild} alt="" src="/textbox3.svg" />
          <div className={styles.text1}>Aug 2013</div>
          <div className={styles.text2}>End date</div>
        </div>
      </div>
      <div className={styles.endDate1}>
        <img className={styles.endDateItem} alt="" src="/textbox3.svg" />
        <div className={styles.text14}>Aug 2023</div>
      </div>
      <div className={styles.startDate2}>
        <img className={styles.endDateItem} alt="" src="/textbox3.svg" />
        <div className={styles.text14}>Sep 2020</div>
      </div>
      <img className={styles.undoChangesChild} alt="" src="/textbox2.svg" />
      <div className={styles.buttonRemoveSave}>
        <div className={styles.button}>
          <div className={styles.buttonChild} />
          <div className={styles.save}>Save</div>
        </div>
        <div className={styles.button1}>
          <div className={styles.buttonItem} />
          <div className={styles.remove}>Remove</div>
        </div>
      </div>
      <div className={styles.text16}>
        Princess Nora bint AbdulRahman University
      </div>
      <div className={styles.popUp}>
        <img className={styles.popUpChild} alt="" src="/rectangle44.svg" />
        <div className={styles.buttonRemoveSave1}>
          <div className={styles.button2}>
            <div className={styles.button3} />
            <b className={styles.text17}>Continue Filling</b>
          </div>
          <div className={styles.button4}>
            <div className={styles.button5} />
            <b className={styles.text18}>Undo Changes</b>
          </div>
        </div>
        <div className={styles.text19}>
          Are you sure you want to change what you entered?
        </div>
        <b className={styles.text20}>Undo Changes ?</b>
        <img className={styles.lineIcon} alt="" src="/line3.svg" />
      </div>
    </div>
  );
};

export default UndoChanges3;
