import { FunctionComponent } from "react";
import styles from "./Profile.module.css";

const Profile: FunctionComponent = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.workExperience}>
        <img
          className={styles.workExperienceChild}
          alt=""
          src="/rectangle.svg"
        />
        <b className={styles.text}>Work experience</b>
        <img className={styles.icon} alt="" src="/icon.svg" />
        <img className={styles.addIcon} alt="" src="/add.svg" />
      </div>
      <div className={styles.aboutMe}>
        <img
          className={styles.workExperienceChild}
          alt=""
          src="/rectangle.svg"
        />
        <b className={styles.text}>About me</b>
        <img className={styles.icon} alt="" src="/icon.svg" />
        <img className={styles.addIcon} alt="" src="/add.svg" />
      </div>
      <div className={styles.education}>
        <img
          className={styles.workExperienceChild}
          alt=""
          src="/rectangle.svg"
        />
        <b className={styles.text}>Education</b>
        <img className={styles.icon2} alt="" src="/icon.svg" />
        <img className={styles.addIcon} alt="" src="/add.svg" />
      </div>
      <div className={styles.skill}>
        <img
          className={styles.workExperienceChild}
          alt=""
          src="/rectangle.svg"
        />
        <b className={styles.text}>Skill</b>
        <img className={styles.icon} alt="" src="/icon.svg" />
        <img className={styles.addIcon} alt="" src="/add.svg" />
      </div>
      <div className={styles.appreciation}>
        <img
          className={styles.workExperienceChild}
          alt=""
          src="/rectangle.svg"
        />
        <b className={styles.text}>Appreciation</b>
        <img className={styles.icon} alt="" src="/icon.svg" />
        <img className={styles.addIcon} alt="" src="/add.svg" />
      </div>
      <div className={styles.language}>
        <img
          className={styles.workExperienceChild}
          alt=""
          src="/rectangle.svg"
        />
        <b className={styles.text}>Language</b>
        <div className={styles.icon5}>
          <div className={styles.iconChild} />
          <div className={styles.iconItem} />
          <img className={styles.iconInner} alt="" src="/rectangle.svg" />
          <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
          <div className={styles.rectangleDiv} />
          <img className={styles.lineIcon} alt="" src="/line.svg" />
          <b className={styles.text6}>A</b>
        </div>
        <img className={styles.addIcon} alt="" src="/add.svg" />
      </div>
      <div className={styles.resume}>
        <img
          className={styles.workExperienceChild}
          alt=""
          src="/rectangle.svg"
        />
        <div className={styles.text7}>Resume</div>
        <img className={styles.icon} alt="" src="/icon.svg" />
        <img className={styles.addIcon} alt="" src="/add.svg" />
      </div>
      <img className={styles.menuBarIcon} alt="" src="/menu-bar.svg" />
      <div className={styles.backgroundParent}>
        <img
          className={styles.backgroundIcon}
          alt=""
          src="/background@2x.png"
        />
        <img className={styles.iconSetting} alt="" src="/icon-setting@2x.png" />
        <img className={styles.iconShared} alt="" src="/icon-shared@2x.png" />
        <div className={styles.text8}>
          <b>120k</b>
          <span className={styles.follower}> Follower</span>
        </div>
        <div className={styles.text9}>
          <b>23k</b>
          <span className={styles.follower}> Following</span>
        </div>
        <div className={styles.editProfile}>
          <img className={styles.buttonIcon1} alt="" src="/button.svg" />
          <div className={styles.text10}>Edit profile</div>
          <img className={styles.editIcon} alt="" src="/edit.svg" />
        </div>
      </div>
      <div className={styles.text11}>{`Riyadh ,Saudi Arabia `}</div>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <div className={styles.text12}>Sara Ali</div>
    </div>
  );
};

export default Profile;
