import { FunctionComponent } from "react";
import styles from "./TypeOfWorkplace.module.css";

const TypeOfWorkplace: FunctionComponent = () => {
  return (
    <div className={styles.typeOfWorkplace}>
      <div className={styles.typeOfWorkplace1}>
        <img
          className={styles.typeOfWorkplaceChild}
          alt=""
          src="/rectangle14.svg"
        />
        <img className={styles.editIcon} alt="" src="/button4.svg" />
        <div className={styles.manager}>
          <div className={styles.text}>On-site</div>
        </div>
        <b className={styles.text1}>Type of workplace</b>
      </div>
      <div className={styles.description}>
        <img
          className={styles.descriptionChild}
          alt=""
          src="/rectangle15.svg"
        />
        <img className={styles.editIcon} alt="" src="/edit.svg" />
        <img className={styles.lineIcon} alt="" src="/line2.svg" />
        <div className={styles.text2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus id
          commodo egestas metus interdum dolor.
        </div>
        <div className={styles.text3}>Description</div>
      </div>
      <div className={styles.trainingLocation}>
        <img
          className={styles.typeOfWorkplaceChild}
          alt=""
          src="/rectangle14.svg"
        />
        <img className={styles.editIcon} alt="" src="/button4.svg" />
        <div className={styles.technicalInformation}>
          <div className={styles.text}>
            <b>Riyad</b>
            <span>, KSA</span>
          </div>
        </div>
        <b className={styles.text5}>training location</b>
      </div>
      <div className={styles.trainingPosition}>
        <img
          className={styles.typeOfWorkplaceChild}
          alt=""
          src="/rectangle14.svg"
        />
        <img className={styles.editIcon} alt="" src="/button4.svg" />
        <div className={styles.assia}>
          <div className={styles.text}>Assistant</div>
        </div>
        <b className={styles.text7}>training position*</b>
      </div>
      <div className={styles.company}>
        <img
          className={styles.typeOfWorkplaceChild}
          alt=""
          src="/rectangle14.svg"
        />
        <div className={styles.text8}>Apple Inc</div>
        <img className={styles.editIcon} alt="" src="/edit.svg" />
        <div className={styles.text9}>Company</div>
      </div>
      <div className={styles.typeOfTraining}>
        <img
          className={styles.typeOfWorkplaceChild}
          alt=""
          src="/rectangle14.svg"
        />
        <img className={styles.addIcon} alt="" src="/add1.svg" />
        <img className={styles.editIcon} alt="" src="/edit.svg" />
        <div className={styles.text10}>Type of work</div>
        <div className={styles.text11}>Full Time</div>
      </div>
      <img className={styles.removeIcon} alt="" src="/button3.svg" />
      <b className={styles.text12}>Add a position</b>
      <div className={styles.popUp}>
        <div className={styles.popUpChild} />
        <img className={styles.popUpItem} alt="" src="/rectangle16.svg" />
        <b className={styles.text13}>Choose the type of workplace</b>
        <div className={styles.text14}>
          Decide and choose the type of place to work according to what you want
        </div>
        <img className={styles.lineIcon1} alt="" src="/line3.svg" />
        <div className={styles.onSite}>
          <div className={styles.onSiteParent}>
            <div className={styles.onSite1}>On-site</div>
            <div className={styles.employeesComeTo}>Employees come to work</div>
          </div>
          <img className={styles.onSiteChild} alt="" src="/group-50.svg" />
        </div>
        <div className={styles.onSite2}>
          <div className={styles.textParent}>
            <div className={styles.onSite1}>Hybrid</div>
            <div className={styles.employeesComeTo}>
              Employees work directly on site or off site
            </div>
          </div>
          <img className={styles.onSiteChild} alt="" src="/group-501.svg" />
        </div>
        <div className={styles.onSite3}>
          <div className={styles.textGroup}>
            <b className={styles.text}>Remote</b>
            <div className={styles.employeesComeTo}>
              Employees working off site
            </div>
          </div>
          <img className={styles.onSiteChild} alt="" src="/group-501.svg" />
        </div>
      </div>
    </div>
  );
};

export default TypeOfWorkplace;
