import { FunctionComponent } from "react";
import styles from "./Description.module.css";

const Description: FunctionComponent = () => {
  return (
    <div className={styles.description}>
      <div className={styles.button}>
        <div className={styles.button1} />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.requirements}>
        <b className={styles.text}>Facilities and Others</b>
        <div className={styles.textParent}>
          <div className={styles.text1}>Medical</div>
          <div className={styles.imege} />
        </div>
        <div className={styles.textGroup}>
          <div className={styles.text1}>Technical Cartification</div>
          <div className={styles.imege} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.text1}>Dental</div>
          <div className={styles.imege} />
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.text1}>Meal Allowance</div>
          <div className={styles.imege} />
        </div>
        <div className={styles.textParent1}>
          <div className={styles.text1}>Transport Allowance</div>
          <div className={styles.imege} />
        </div>
        <div className={styles.textParent2}>
          <div className={styles.text1}>Regular Hours</div>
          <div className={styles.imege} />
        </div>
        <div className={styles.textParent3}>
          <div className={styles.text1}>Mondays-Fridays</div>
          <div className={styles.imege} />
        </div>
      </div>
      <div className={styles.location}>
        <b className={styles.text8}>Location</b>
        <div className={styles.text9}>Riyadh, KSA</div>
        <img className={styles.mapIcon} alt="" src="/map@2x.png" />
        <img
          className={styles.iconLocations}
          alt=""
          src="/icon-locations.svg"
        />
      </div>
      <div className={styles.informations}>
        <b className={styles.text10}>Informations</b>
        <div className={styles.position}>
          <b className={styles.text8}>Position</b>
          <div className={styles.text12}>IT Senior</div>
        </div>
        <div className={styles.experience}>
          <b className={styles.text8}>Experience</b>
          <div className={styles.text12}>No Experience</div>
        </div>
        <div className={styles.jobType}>
          <b className={styles.text15}>Training Type</b>
          <div className={styles.text12}>Cooperative training</div>
        </div>
        <div className={styles.specialization}>
          <b className={styles.text8}>Specialization</b>
          <div className={styles.text12}>Sciece Technology</div>
        </div>
        <img className={styles.lineIcon1} alt="" src="/line.svg" />
        <img className={styles.lineIcon2} alt="" src="/line.svg" />
        <img className={styles.lineIcon3} alt="" src="/line.svg" />
        <img className={styles.lineIcon4} alt="" src="/line.svg" />
      </div>
      <div className={styles.button}>
        <div className={styles.button1} />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <img className={styles.optionsIcon} alt="" src="/options.svg" />
      <div className={styles.text19}>Training Type</div>
      <div className={styles.text20}>Postion</div>
      <div className={styles.button4}>
        <img className={styles.buttonIcon} alt="" src="/button.svg" />
        <b className={styles.text21}>Apply Now</b>
      </div>
      <div className={styles.jobDescription}>
        <div className={styles.button5}>
          <div className={styles.button6} />
          <div className={styles.text22}>Read more</div>
        </div>
        <div className={styles.text23}>Training Description</div>
        <div className={styles.text24}>
          The training cooperation program at the King Abdulaziz City for
          Science and Technology provides young people with an investment
          opportunity and their development by acquiring scientific and
          cognitive skills from specialized national competencies in the
          technical and administrative fields and applying them in a stimulating
          work environment.
        </div>
      </div>
      <div className={styles.requirements1}>
        <div className={styles.text25}>Requirements</div>
        <img className={styles.requirementsChild} alt="" src="/group-7.svg" />
        <div className={styles.textParent4}>
          <div className={styles.text26}>
            <p className={styles.availabilityOfA}>
              Availability of a letter of accreditation (training request)
              approved by the university.
            </p>
            <p className={styles.availabilityOfA}>&nbsp;</p>
          </div>
          <div className={styles.imege} />
        </div>
        <div className={styles.textParent5}>
          <div className={styles.text27}>
            <p
              className={styles.availabilityOfA}
            >{`Currently attending the final year `}</p>
            <p className={styles.availabilityOfA}>&nbsp;</p>
          </div>
          <div className={styles.imege} />
        </div>
        <div className={styles.textParent6}>
          <div className={styles.text28}>
            <p className={styles.availabilityOfA}>
              Attention to detail and a focus on delivering high-quality,
              polished designs.
            </p>
            <p className={styles.availabilityOfA}>&nbsp;</p>
          </div>
          <div className={styles.imege9} />
          <div className={styles.text29}>
            The applicant must be of Saudi nationality.
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <b className={styles.text30}>IT Senior</b>
        <div className={styles.text31}>KACST</div>
        <div className={styles.text32}>{`Riyadh `}</div>
        <div className={styles.text33}>1 day ago</div>
        <div className={styles.imege10} />
        <div className={styles.imege11} />
        <img className={styles.imegeIcon} alt="" src="/imege@2x.png" />
      </div>
    </div>
  );
};

export default Description;
