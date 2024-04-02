import { FunctionComponent } from "react";
import styles from "./StartDate.module.css";

const StartDate: FunctionComponent = () => {
  return (
    <div className={styles.startDate}>
      <img className={styles.removeIcon} alt="" src="/button.svg" />
      <div className={styles.addEducation}>
        <b className={styles.text}>Change Education</b>
        <div className={styles.jobTitle}>
          <img className={styles.jobTitleChild} alt="" src="/textbox.svg" />
          <div className={styles.text1}>Bachelor of Information Technology</div>
          <b className={styles.text2}>Level of education</b>
        </div>
        <div className={styles.company}>
          <img className={styles.jobTitleChild} alt="" src="/textbox.svg" />
          <div className={styles.text1}>University of Oxford</div>
          <b className={styles.text2}>Institution name</b>
        </div>
        <div className={styles.company1}>
          <img className={styles.jobTitleChild} alt="" src="/textbox.svg" />
          <div className={styles.text1}>Information Technology</div>
          <b className={styles.text2}>Field of study</b>
        </div>
        <div className={styles.startDate1}>
          <img className={styles.startDateChild} alt="" src="/textbox.svg" />
          <div className={styles.text1}>Sep 2010</div>
          <b className={styles.text2}>Start date</b>
        </div>
        <div className={styles.startDate2}>
          <img className={styles.startDateItem} alt="" src="/button.svg" />
          <img className={styles.startDateInner} alt="" src="/rectangle.svg" />
          <div className={styles.text9}>This is my position now</div>
        </div>
        <div className={styles.description}>
          <img className={styles.descriptionChild} alt="" src="/textarea.svg" />
          <div className={styles.text10}>Write additional information here</div>
          <b className={styles.text2}>Description</b>
        </div>
        <div className={styles.endDate}>
          <img className={styles.startDateChild} alt="" src="/textbox.svg" />
          <div className={styles.text1}>Aug 2013</div>
          <b className={styles.text2}>End date</b>
        </div>
      </div>
      <div className={styles.buttonRemoveSave}>
        <div className={styles.save}>
          <div className={styles.saveChild} />
          <b className={styles.save1}>Save</b>
        </div>
        <div className={styles.remove}>
          <div className={styles.removeChild} />
          <b className={styles.remove1}>Remove</b>
        </div>
      </div>
      <div className={styles.popUp}>
        <div className={styles.popUpChild} />
        <div className={styles.endDate1}>
          <img className={styles.endDateItem} alt="" src="/rectangle.svg" />
          <img className={styles.lineIcon} alt="" src="/line.svg" />
          <div className={styles.buttonRemoveSave1}>
            <div className={styles.button}>
              <div className={styles.button1} />
              <b className={styles.text14}>Save</b>
            </div>
            <div className={styles.button2}>
              <div className={styles.button3} />
              <b className={styles.text15}>Cancel</b>
            </div>
          </div>
          <div className={styles.mount}>
            <div className={styles.sep}>
              <div className={styles.sepChild} />
              <div className={styles.text16}>Sep</div>
            </div>
            <div className={styles.oct}>
              <div className={styles.octChild} />
              <div className={styles.text17}>Oct</div>
            </div>
            <div className={styles.oct1}>
              <div className={styles.octChild} />
              <div className={styles.text18}>Aug</div>
            </div>
          </div>
          <div className={styles.year}>
            <div className={styles.oct}>
              <div className={styles.octChild} />
              <div className={styles.text19}>2025</div>
            </div>
            <div className={styles.oct1}>
              <div className={styles.octChild} />
              <div className={styles.text19}>2023</div>
            </div>
            <div className={styles.sep}>
              <div className={styles.sepChild} />
              <div className={styles.text21}>2024</div>
            </div>
          </div>
          <b className={styles.text22}>End Date</b>
          <img className={styles.lineIcon1} alt="" src="/line.svg" />
        </div>
      </div>
    </div>
  );
};

export default StartDate;
