import { FunctionComponent } from "react";
import styles from "./MyProfileV.module.css";

const MyProfileV: FunctionComponent = () => {
  return (
    <div className={styles.myProfileV1}>
      <div className={styles.addWorkExperience}>
        <div className={styles.jobTitle}>
          <img className={styles.jobTitleChild} alt="" src="/textbox2.svg" />
          <div className={styles.text}>{`sara Ali `}</div>
          <div className={styles.text1}>Fullname</div>
        </div>
        <div className={styles.company}>
          <img className={styles.jobTitleChild} alt="" src="/textbox2.svg" />
          <img
            className={styles.iconCalender}
            alt=""
            src="/icon-calender.svg"
          />
          <div className={styles.text}>06 August 2002</div>
          <div className={styles.text1}>Date of birth</div>
        </div>
        <div className={styles.description}>
          <img className={styles.jobTitleChild} alt="" src="/textbox2.svg" />
          <div className={styles.text}>{`Sara.ali@gmail.com `}</div>
          <div className={styles.text1}>Email address</div>
        </div>
        <div className={styles.description1}>
          <img className={styles.jobTitleChild} alt="" src="/textbox2.svg" />
          <img className={styles.lineIcon} alt="" src="/line9.svg" />
          <div className={styles.text6}>966+</div>
          <div className={styles.text7}>050 345 7890</div>
          <img
            className={styles.descriptionInner}
            alt=""
            src="/rectangle42.svg"
          />
          <div className={styles.text1}>Phone number</div>
        </div>
        <div className={styles.description2}>
          <img className={styles.jobTitleChild} alt="" src="/textbox2.svg" />
          <div className={styles.text}>{`Riyadh ,Saudi Arabia `}</div>
          <div className={styles.text1}>Location</div>
        </div>
        <div className={styles.endDate}>
          <img className={styles.endDateChild} alt="" src="/textbox3.svg" />
          <div className={styles.text11}>Male</div>
          <img className={styles.endDateItem} alt="" src="/textbox3.svg" />
          <div className={styles.text12}>Female</div>
          <img className={styles.selectIcon} alt="" src="/group-501.svg" />
          <div className={styles.text1}>Gender</div>
        </div>
      </div>
      <div className={styles.save}>
        <div className={styles.button} />
        <b className={styles.text14}>Save</b>
      </div>
      <div className={styles.backgroundParent}>
        <img
          className={styles.backgroundIcon}
          alt=""
          src="/background1@2x.png"
        />
        <div className={styles.text15}>Sara Ali</div>
        <div className={styles.text16}>{`Riyadh ,Saudi Arabia `}</div>
        <img className={styles.iconSetting} alt="" src="/icon-setting@2x.png" />
        <img className={styles.iconShared} alt="" src="/icon-shared1@2x.png" />
        <div className={styles.editProfile}>
          <img className={styles.buttonIcon} alt="" src="/button13.svg" />
          <div className={styles.text17}>Change image</div>
        </div>
      </div>
      <img className={styles.selectIcon1} alt="" src="/select.svg" />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group5@2x.png" />
    </div>
  );
};

export default MyProfileV;
