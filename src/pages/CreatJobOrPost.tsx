import { FunctionComponent } from "react";
import styles from "./CreatJobOrPost.module.css";

const CreatJobOrPost: FunctionComponent = () => {
  return (
    <div className={styles.creatJobOrPost}>
      <div className={styles.specialization}>
        <b className={styles.text}>Specialization</b>
        <div className={styles.scienceTechnologyParent}>
          <div className={styles.scienceTechnology}>
            <div className={styles.scienceTechnologyChild} />
            <div className={styles.text1}>Science Technology</div>
            <div className={styles.text2}>140 training</div>
            <div className={styles.scienceTechnologyItem} />
            <img className={styles.iconDesign} alt="" src="/icon-design.svg" />
          </div>
          <div className={styles.businessManagement}>
            <img
              className={styles.businessManagementChild}
              alt=""
              src="/rectangle.svg"
            />
            <b className={styles.imege}>Business Management</b>
            <div className={styles.imege1}>250 training</div>
            <img className={styles.iconDesign} alt="" src="/icon.svg" />
          </div>
          <div className={styles.restaurant}>
            <div className={styles.restaurantChild} />
            <div className={styles.text3}>Restaurant</div>
            <div className={styles.text4}>85 Jobs</div>
            <img className={styles.icon1} alt="" src="/icon.svg" />
          </div>
          <div className={styles.education}>
            <div className={styles.restaurantChild} />
            <div className={styles.text5}>Education</div>
            <div className={styles.text6}>120 training</div>
            <img className={styles.icon2} alt="" src="/icon.svg" />
          </div>
          <div className={styles.health}>
            <div className={styles.restaurantChild} />
            <div className={styles.text7}>Health</div>
            <div className={styles.text8}>235 Jobs</div>
            <img className={styles.icon3} alt="" src="/icon@2x.png" />
          </div>
          <div className={styles.law}>
            <div className={styles.restaurantChild} />
            <b className={styles.text9}>law</b>
            <div className={styles.text10}>412 Jobs</div>
            <img className={styles.imegeIcon} alt="" src="/imege@2x.png" />
          </div>
        </div>
        <div className={styles.text11}>View all</div>
      </div>
      <div className={styles.jobRecommendation}>
        <b className={styles.text12}>Job Recommendation</b>
        <div className={styles.googleInc}>
          <img className={styles.googleIncChild} alt="" src="/rectangle.svg" />
          <div className={styles.logoGoogle}>
            <div className={styles.imege2} />
            <img className={styles.imegeIcon1} alt="" src="/imege@2x.png" />
          </div>
          <div className={styles.fullTime}>
            <div className={styles.fullTimeChild} />
            <div className={styles.text13}>Full time</div>
          </div>
          <div className={styles.design}>
            <div className={styles.designChild} />
            <div className={styles.text14}>Design</div>
          </div>
          <div className={styles.seniorDesigner}>
            <div className={styles.seniorDesignerChild} />
            <div className={styles.text15}>Senior designer</div>
          </div>
          <div className={styles.save}>
            <div className={styles.saveChild} />
            <img className={styles.saveItem} alt="" src="/rectangle.svg" />
          </div>
          <div className={styles.text16}>
            <b>
              <span>$15K</span>
              <span className={styles.span}>/</span>
            </b>
            <span className={styles.span}>
              <span>Mo</span>
            </span>
          </div>
          <div className={styles.text17}>California, USA</div>
          <b className={styles.text18}>UI/UX Designer</b>
          <div className={styles.text19}>Google inc</div>
          <div className={styles.imege3} />
        </div>
      </div>
      <img className={styles.menuBarIcon} alt="" src="/menu-bar.svg" />
      <div className={styles.popUp}>
        <div className={styles.popUpChild} />
      </div>
      <img className={styles.backgroundIcon} alt="" src="/background@2x.png" />
      <img className={styles.filterIcon} alt="" src="/filter.svg" />
      <div className={styles.search}>
        <img className={styles.textboxIcon} alt="" src="/textbox.svg" />
        <img className={styles.iconSearch} alt="" src="/icon-search.svg" />
        <div className={styles.text20}>Search</div>
        <b className={styles.text21}>Find your dream training here!</b>
      </div>
      <div className={styles.iconNotifications}>
        <img className={styles.saveChild} alt="" />
        <div className={styles.imege4} />
        <img
          className={styles.iconNotificationsChild}
          alt=""
          src="/rectangle.svg"
        />
        <div className={styles.imege5} />
        <div className={styles.text22}>2</div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/rectangle.svg" />
        <div className={styles.buttonRemoveSave}>
          <div className={styles.save1}>
            <div className={styles.button} />
            <b className={styles.text23}>Post</b>
          </div>
          <div className={styles.button1}>
            <div className={styles.button2} />
          </div>
        </div>
        <div className={styles.text24}>
          Would you like to post your tips and experiences or create a training?
        </div>
        <b className={styles.text25}>What would you like to add?</b>
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <b className={styles.text26}>Make a training</b>
      <div className={styles.text27}>Hi, sara Alii</div>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
    </div>
  );
};

export default CreatJobOrPost;
