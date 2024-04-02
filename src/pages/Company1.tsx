import { FunctionComponent } from "react";
import styles from "./Company1.module.css";

const Company1: FunctionComponent = () => {
  return (
    <div className={styles.company}>
      <div className={styles.button}>
        <div className={styles.rectangle} />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.button}>
        <div className={styles.rectangle} />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.industry}>
        <b className={styles.text}>Industry</b>
        <div className={styles.text1}>Science and Technology</div>
      </div>
      <div className={styles.employeeSize}>
        <img
          className={styles.employeeSizeIcon}
          alt=""
          src="/employee-size.svg"
        />
        <img className={styles.textIcon} alt="" src="/text.svg" />
      </div>
      <div className={styles.headOffice}>
        <b className={styles.text}>Head office</b>
        <div className={styles.text1}>
          Mountain View, California, Amerika Serikat
        </div>
      </div>
      <div className={styles.type}>
        <b className={styles.text}>Type</b>
        <div className={styles.text1}>Multinational company</div>
      </div>
      <div className={styles.since}>
        <b className={styles.text}>Since</b>
        <div className={styles.text1}>2009</div>
      </div>
      <div className={styles.specialization}>
        <b className={styles.text}>Specialization</b>
        <div className={styles.text9}>
          Search technology, Web computing, Software and Online advertising
        </div>
      </div>
      <div className={styles.companyGallery}>
        <div className={styles.text10}>Company Gallery</div>
      </div>
      <div className={styles.menuBar}>
        <img className={styles.menuBarChild} alt="" src="/rectangle.svg" />
        <img className={styles.saveIcon} alt="" src="/save.svg" />
        <div className={styles.button4}>
          <img className={styles.buttonIcon} alt="" src="/button.svg" />
          <b className={styles.text11}>Apply Now</b>
        </div>
      </div>
      <div className={styles.buttonParent}>
        <img className={styles.buttonIcon1} alt="" src="/button.svg" />
        <div className={styles.button5}>
          <div className={styles.rectangle} />
          <img className={styles.lineIcon} alt="" src="/line.svg" />
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangle1} />
          <b className={styles.text12}>IT Senior</b>
          <div className={styles.text13}>KACST</div>
          <div className={styles.text14}>{`Riyadh `}</div>
          <div className={styles.text15}>1 day ago</div>
          <div className={styles.imege} />
          <div className={styles.imege1} />
        </div>
        <img className={styles.imegeIcon} alt="" src="/imege@2x.png" />
      </div>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <img className={styles.imageIcon1} alt="" src="/image@2x.png" />
      <div className={styles.imege2} />
      <div className={styles.text16}>+5 pictures</div>
      <div className={styles.buttonGroup}>
        <div className={styles.button6} />
        <div className={styles.button7} />
        <div className={styles.button8}>
          <div className={styles.button9} />
        </div>
        <b className={styles.text17}>Company</b>
        <b className={styles.text18}>Description</b>
      </div>
      <div className={styles.aboutCompany}>
        <b className={styles.text19}>About Company</b>
        <div className={styles.text20}>
          KAUST is a deep tech ecosystem unlike anywhere else: a community of
          the brightest minds brought together on the coast of the Red Sea to
          meet the future’s most urgent challenges.
        </div>
        <div className={styles.text21}>
          <p className={styles.inWorldClassLabs}>
            In world-class labs and classrooms, you’ll find scientists,
            students, startups, and companies working together to discover new
            applications for research and develop new technology—all with one
            ambition: to create remarkable impact in people’s lives.
          </p>
        </div>
        <div className={styles.text22}>
          <p className={styles.inWorldClassLabs}>
            It’s our mission at KAUST Innovation to bring researchers, industry
            leaders and the next generation of founders together to transform
            Saudi Arabia and the world.
          </p>
        </div>
      </div>
      <div className={styles.website}>
        <b className={styles.text}>Website</b>
        <div className={styles.text24}>https://www.kaust.edu.sa/</div>
      </div>
    </div>
  );
};

export default Company1;
