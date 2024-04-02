import { FunctionComponent } from "react";
import styles from "./Description1.module.css";

const Description1: FunctionComponent = () => {
  return (
    <div className={styles.description}>
      <div className={styles.button}>
        <div className={styles.button1} />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.jobDescription}>
        <div className={styles.button2}>
          <div className={styles.button3} />
          <div className={styles.text}>Read more</div>
        </div>
        <div className={styles.text1}>Training Description</div>
        <div className={styles.text2}>
          The training cooperation program at the King Abdulaziz City for
          Science and Technology provides young people with an investment
          opportunity and their development by acquiring scientific and
          cognitive skills from specialized national competencies in the
          technical and administrative fields and applying them in a stimulating
          work environment.
        </div>
      </div>
      <div className={styles.requirements}>
        <div className={styles.text3}>Requirements</div>
        <img className={styles.requirementsChild} alt="" src="/group-7.svg" />
        <div className={styles.textParent}>
          <div className={styles.text4}>
            <p className={styles.availabilityOfA}>
              Availability of a letter of accreditation (training request)
              approved by the university.
            </p>
            <p className={styles.availabilityOfA}>&nbsp;</p>
          </div>
          <div className={styles.imege} />
        </div>
        <div className={styles.textGroup}>
          <div className={styles.text5}>
            <p
              className={styles.availabilityOfA}
            >{`Currently attending the final year `}</p>
            <p className={styles.availabilityOfA}>&nbsp;</p>
          </div>
          <div className={styles.imege} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.text6}>
            <p className={styles.availabilityOfA}>
              Attention to detail and a focus on delivering high-quality,
              polished designs.
            </p>
            <p className={styles.availabilityOfA}>&nbsp;</p>
          </div>
          <div className={styles.imege2} />
          <div className={styles.text7}>
            The applicant must be of Saudi nationality.
          </div>
        </div>
      </div>
      <img className={styles.buttonIcon} alt="" src="/options.svg" />
      <div className={styles.button4}>
        <img className={styles.buttonIcon1} alt="" src="/button.svg" />
        <b className={styles.text8}>Apply Now</b>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangle} />
          <b className={styles.text9}>{`IT Senior `}</b>
          <div className={styles.text10}>KACST</div>
          <div className={styles.text11}>{`Riyadh `}</div>
          <div className={styles.text12}>1 day ago</div>
          <div className={styles.imege3} />
          <div className={styles.imege4} />
        </div>
        <img className={styles.imegeIcon} alt="" src="/imege@2x.png" />
      </div>
    </div>
  );
};

export default Description1;
