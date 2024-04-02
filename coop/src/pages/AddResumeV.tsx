import { FunctionComponent } from "react";
import styles from "./AddResumeV.module.css";

const AddResumeV: FunctionComponent = () => {
  return (
    <div className={styles.addResumeV2}>
      <div className={styles.addWorkExperience}>
        <div className={styles.jobTitle}>
          <img className={styles.jobTitleChild} alt="" src="/textbox2.svg" />
          <div className={styles.saraAli}>{`sara Ali `}</div>
          <div className={styles.fullname}>Fullname</div>
        </div>
        <div className={styles.company}>
          <img className={styles.jobTitleChild} alt="" src="/textbox2.svg" />
          <img
            className={styles.iconCalender}
            alt=""
            src="/icon-calender1.svg"
          />
          <div className={styles.saraAli}>06 August 2002</div>
          <div className={styles.fullname}>Date of birth</div>
        </div>
        <div className={styles.description}>
          <img className={styles.jobTitleChild} alt="" src="/textbox2.svg" />
          <div className={styles.saraAli}>{`Sara.ali@gmail.com `}</div>
          <div className={styles.fullname}>Email address</div>
        </div>
        <div className={styles.description1}>
          <img className={styles.jobTitleChild} alt="" src="/textbox2.svg" />
          <img className={styles.descriptionInner} alt="" src="/line9.svg" />
          <div className={styles.div}>966+</div>
          <div className={styles.div1}>050 345 7890</div>
          <img className={styles.rectangleIcon} alt="" src="/rectangle42.svg" />
          <div className={styles.fullname}>Phone number</div>
        </div>
        <div className={styles.description2}>
          <img className={styles.jobTitleChild} alt="" src="/textbox2.svg" />
          <div className={styles.saraAli}>{`Riyadh ,Saudi Arabia `}</div>
          <div className={styles.fullname}>Location</div>
        </div>
        <div className={styles.endDate}>
          <img className={styles.endDateChild} alt="" src="/textbox3.svg" />
          <div className={styles.male}>Male</div>
          <img className={styles.endDateItem} alt="" src="/textbox3.svg" />
          <div className={styles.female}>Female</div>
          <img className={styles.selectIcon} alt="" src="/group-501.svg" />
          <div className={styles.fullname}>Gender</div>
        </div>
      </div>
      <div className={styles.save}>
        <div className={styles.button} />
        <b className={styles.save1}>Save</b>
      </div>
      <div className={styles.backgroundParent}>
        <img
          className={styles.backgroundIcon}
          alt=""
          src="/background1@2x.png"
        />
        <div className={styles.saraAli1}>Sara Ali</div>
        <div
          className={styles.riyadhSaudiArabia1}
        >{`Riyadh ,Saudi Arabia `}</div>
        <img className={styles.iconSetting} alt="" src="/icon-setting@2x.png" />
        <img className={styles.iconShared} alt="" src="/icon-shared1@2x.png" />
        <div className={styles.editProfile}>
          <img className={styles.buttonIcon} alt="" src="/button13.svg" />
          <div className={styles.changeImage}>Change image</div>
        </div>
      </div>
      <img className={styles.selectIcon1} alt="" src="/group-50.svg" />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group8@2x.png" />
    </div>
  );
};

export default AddResumeV;
