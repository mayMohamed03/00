import { FunctionComponent } from "react";
import styles from "./ChooseJobType.module.css";

const ChooseJobType: FunctionComponent = () => {
  return (
    <div className={styles.chooseJobType}>
      <div className={styles.typeOfWorkplace}>
        <img
          className={styles.typeOfWorkplaceChild}
          alt=""
          src="/rectangle14.svg"
        />
        <img className={styles.buttonIcon} alt="" src="/button4.svg" />
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
        <img className={styles.buttonIcon} alt="" src="/button4.svg" />
        <img className={styles.lineIcon} alt="" src="/line2.svg" />
        <div className={styles.text2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus id
          commodo egestas metus interdum dolor.
        </div>
        <div className={styles.text3}>Description</div>
      </div>
      <div className={styles.jobLocation}>
        <img
          className={styles.typeOfWorkplaceChild}
          alt=""
          src="/rectangle14.svg"
        />
        <img className={styles.buttonIcon} alt="" src="/button4.svg" />
        <div className={styles.technicalInformation}>
          <div className={styles.text}>California, USA</div>
        </div>
        <div className={styles.text5}>Job location</div>
      </div>
      <div className={styles.jobPosition}>
        <img
          className={styles.typeOfWorkplaceChild}
          alt=""
          src="/rectangle14.svg"
        />
        <img className={styles.buttonIcon} alt="" src="/button4.svg" />
        <div className={styles.wirelessSymposiumRws}>
          <div className={styles.text}>Administrative Assistant</div>
        </div>
        <b className={styles.text1}>training position*</b>
      </div>
      <div className={styles.company}>
        <img
          className={styles.typeOfWorkplaceChild}
          alt=""
          src="/rectangle14.svg"
        />
        <div className={styles.text8}>Apple Inc</div>
        <img className={styles.buttonIcon} alt="" src="/button4.svg" />
        <div className={styles.text5}>Company</div>
      </div>
      <div className={styles.typeOfWork}>
        <img
          className={styles.typeOfWorkplaceChild}
          alt=""
          src="/rectangle14.svg"
        />
        <img className={styles.addIcon} alt="" src="/add1.svg" />
        <img className={styles.buttonIcon} alt="" src="/button4.svg" />
        <div className={styles.text10}>Type of work</div>
        <div className={styles.text11}>Full Time</div>
      </div>
      <img className={styles.removeIcon} alt="" src="/button3.svg" />
      <b className={styles.text12}>Add a training</b>
      <div className={styles.popUp}>
        <div className={styles.popUpChild} />
        <img className={styles.popUpItem} alt="" src="/rectangle17.svg" />
        <b className={styles.text13}>Choose training Type</b>
        <div className={styles.text14}>
          Determine and choose the type of training according to what you want
        </div>
        <img className={styles.lineIcon1} alt="" src="/line4.svg" />
        <div className={styles.temporary}>
          <b className={styles.text15}>Temporary</b>
          <img className={styles.temporaryChild} alt="" src="/group-502.svg" />
        </div>
        <div className={styles.fullTime}>
          <b className={styles.text16}>Full time</b>
          <img className={styles.temporaryChild} alt="" src="/group-503.svg" />
        </div>
        <div className={styles.volunteer}>
          <b className={styles.text17}>Volunteer</b>
          <img className={styles.temporaryChild} alt="" src="/group-504.svg" />
        </div>
        <div className={styles.partTime}>
          <b className={styles.text18}>Part time</b>
          <img className={styles.temporaryChild} alt="" src="/group-504.svg" />
        </div>
        <div className={styles.apprenticeship}>
          <b className={styles.text19}>Apprenticeship</b>
          <img className={styles.temporaryChild} alt="" src="/group-502.svg" />
        </div>
        <div className={styles.contract}>
          <b className={styles.text20}>Contract</b>
          <img className={styles.temporaryChild} alt="" src="/group-502.svg" />
        </div>
      </div>
    </div>
  );
};

export default ChooseJobType;
