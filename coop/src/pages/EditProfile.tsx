import { FunctionComponent } from "react";
import styles from "./EditProfile.module.css";

const EditProfile: FunctionComponent = () => {
  return (
    <div className={styles.editProfile}>
      <div className={styles.aboutMe}>
        <img className={styles.aboutMeChild} alt="" src="/rectangle78.svg" />
        <img className={styles.buttonIcon} alt="" src="/button34.svg" />
        <img className={styles.iconAboutMe} alt="" src="/icon-about-me.svg" />
        <img className={styles.lineIcon} alt="" src="/line20.svg" />
        <div className={styles.text}>
          As an IT student at [Princess Nora University], I'm deeply passionate
          about technology and its applications. I possess a strong drive for
          learning and problem-solving. Committed to staying updated with
          industry trends and eager to contribute to innovative projects.
        </div>
        <b className={styles.text1}>About me</b>
      </div>
      <div className={styles.education}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle79.svg" />
        <img className={styles.addIcon} alt="" src="/add3.svg" />
        <img className={styles.editIcon} alt="" src="/button4.svg" />
        <img className={styles.iconEducation} alt="" src="/icon13.svg" />
        <div className={styles.technicalInformation}>
          <div className={styles.sep2010Aug2013}>
            <div className={styles.text2}>{`Sep 2020 - Aug 2023 `}</div>
            <div className={styles.text3}>4 Years</div>
            <div className={styles.imege} />
          </div>
          <div className={styles.line}>
            Princess Nora bint AbdulRahman University
          </div>
          <b className={styles.line1}>Information Technology</b>
        </div>
        <img className={styles.lineIcon1} alt="" src="/line21.svg" />
        <b className={styles.text4}>Education</b>
      </div>
      <div className={styles.appreciation}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle79.svg" />
        <img className={styles.addIcon} alt="" src="/add3.svg" />
        <img className={styles.editIcon} alt="" src="/button4.svg" />
        <div className={styles.iconAppreciation}>
          <div className={styles.rectangle} />
          <div className={styles.rectangle1} />
          <img
            className={styles.rectangleIcon2}
            alt=""
            src="/rectangle39.svg"
          />
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle40.svg"
          />
          <div className={styles.rectangle2} />
          <b className={styles.text5}>A</b>
        </div>
        <div className={styles.wirelessSymposiumRws}>
          <div className={styles.text6}>2014</div>
          <div className={styles.text7}>Young Scientist</div>
          <b className={styles.text8}>Wireless Symposium (RWS)</b>
        </div>
        <img className={styles.lineIcon1} alt="" src="/line2.svg" />
        <b className={styles.text4}>Appreciation</b>
      </div>
      <div className={styles.resume}>
        <img className={styles.resumeChild} alt="" src="/rectangle-162.svg" />
        <div className={styles.jametKudasiCvUiuxDesi}>
          <div className={styles.feb2024At}>14 Feb 2024 at 11:30 am</div>
          <div className={styles.jametKudasiCvUiuxDesiChild} />
          <img className={styles.optionIcon} alt="" src="/option@2x.png" />
          <div className={styles.pdf}>
            <div className={styles.pdfChild} />
            <img className={styles.pdfItem} alt="" src="/rectangle33.svg" />
            <img className={styles.pdfInner} alt="" src="/vector.svg" />
            <div className={styles.pdf1}>PDF</div>
          </div>
          <img className={styles.buttonIcon3} alt="" src="/icon18.svg" />
          <div className={styles.saraAli}>{`Sara Ali - CV -IT Student `}</div>
          <div className={styles.kb}>867 Kb</div>
        </div>
        <img className={styles.addIcon} alt="" src="/add3.svg" />
        <img className={styles.iconResume} alt="" src="/icon-resume.svg" />
        <img className={styles.lineIcon1} alt="" src="/line2.svg" />
        <b className={styles.text10}>Resume</b>
      </div>
      <div className={styles.skill}>
        <img className={styles.rectangleIcon4} alt="" src="/rectangle80.svg" />
        <div className={styles.leadershipParent}>
          <div className={styles.leadership}>
            <img
              className={styles.rectangleIcon5}
              alt=""
              src="/rectangle81.svg"
            />
            <div className={styles.text11}>Leadership</div>
          </div>
          <div className={styles.teamwork}>
            <img
              className={styles.rectangleIcon6}
              alt=""
              src="/rectangle82.svg"
            />
            <div className={styles.text11}>Teamwork</div>
          </div>
          <div className={styles.targetOriented}>
            <img
              className={styles.rectangleIcon7}
              alt=""
              src="/rectangle83.svg"
            />
            <div className={styles.text11}>Target oriented</div>
          </div>
          <div className={styles.consistent}>
            <img
              className={styles.rectangleIcon8}
              alt=""
              src="/rectangle84.svg"
            />
            <div className={styles.text11}>Consistent</div>
          </div>
          <div className={styles.visioner}>
            <img
              className={styles.rectangleIcon9}
              alt=""
              src="/rectangle85.svg"
            />
            <div className={styles.text11}>Visioner</div>
          </div>
          <div className={styles.text16}>+5 more</div>
          <div className={styles.button}>See more</div>
        </div>
        <img className={styles.addIcon} alt="" src="/button4.svg" />
        <img className={styles.iconResume} alt="" src="/icon14.svg" />
        <img className={styles.lineIcon1} alt="" src="/line2.svg" />
        <b className={styles.text4}>Skill</b>
      </div>
      <div className={styles.imege1}>
        <img className={styles.rectangleIcon10} alt="" src="/rectangle86.svg" />
        <div className={styles.englishWrapper}>
          <div className={styles.english}>
            <img
              className={styles.rectangleIcon11}
              alt=""
              src="/rectangle87.svg"
            />
            <div className={styles.text11}>English</div>
          </div>
        </div>
        <img className={styles.addIcon} alt="" src="/button4.svg" />
        <img className={styles.iconResume} alt="" src="/icon15.svg" />
        <img className={styles.lineIcon1} alt="" src="/line2.svg" />
        <b className={styles.text4}>Language</b>
      </div>
      <img className={styles.menuBarIcon} alt="" src="/menu-bar1.svg" />
      <div className={styles.groupParent}>
        <img className={styles.groupChild} alt="" src="/background@2x.png" />
        <div className={styles.text20}>Sara Ali</div>
        <div className={styles.text21}>{`Riyadh ,Saudi Arabia `}</div>
        <img className={styles.buttonIcon6} alt="" src="/icon-setting@2x.png" />
        <img className={styles.buttonIcon7} alt="" src="/icon-shared@2x.png" />
        <div className={styles.button1}>
          <img className={styles.buttonIcon8} alt="" src="/button13.svg" />
          <div className={styles.text22}>Change image</div>
        </div>
        <img
          className={styles.maskGroupIcon}
          alt=""
          src="/mask-group4@2x.png"
        />
      </div>
    </div>
  );
};

export default EditProfile;
