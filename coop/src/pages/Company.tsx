import { FunctionComponent } from "react";
import styles from "./Company.module.css";

const Company: FunctionComponent = () => {
  return (
    <div className={styles.company}>
      <div className={styles.button}>
        <div className={styles.buttonChild} />
        <img className={styles.imegeIcon} alt="" src="/line15.svg" />
      </div>
      <div className={styles.button}>
        <div className={styles.buttonChild} />
        <img className={styles.imegeIcon} alt="" src="/line15.svg" />
      </div>
      <img className={styles.buttonIcon} alt="" src="/options.svg" />
      <div className={styles.aboutCompany}>
        <b className={styles.text}>About Company</b>
        <div className={styles.text1}>
          KAUST is a deep tech ecosystem unlike anywhere else: a community of
          the brightest minds brought together on the coast of the Red Sea to
          meet the future’s most urgent challenges.
        </div>
        <div className={styles.text2}>
          <p className={styles.inWorldClassLabs}>
            In world-class labs and classrooms, you’ll find scientists,
            students, startups, and companies working together to discover new
            applications for research and develop new technology—all with one
            ambition: to create remarkable impact in people’s lives.
          </p>
        </div>
        <div className={styles.text3}>
          <p className={styles.inWorldClassLabs}>
            It’s our mission at KAUST Innovation to bring researchers, industry
            leaders and the next generation of founders together to transform
            Saudi Arabia and the world.
          </p>
        </div>
      </div>
      <div className={styles.website}>
        <b className={styles.text4}>Website</b>
        <div className={styles.text5}>https://www.kaust.edu.sa/</div>
      </div>
      <div className={styles.industry}>
        <b className={styles.text4}>Industry</b>
        <div className={styles.text7}>Science and Technology</div>
      </div>
      <div className={styles.employeeSize}>
        <b className={styles.text4}>Employee size</b>
        <div className={styles.text7}>1,001-5,000 Employees</div>
      </div>
      <div className={styles.headOffice}>
        <div className={styles.text10}>Head office</div>
        <div className={styles.text7}>
          Mountain View, California, Amerika Serikat
        </div>
      </div>
      <div className={styles.type}>
        <div className={styles.text10}>Type</div>
        <div className={styles.text13}>Multinational company</div>
      </div>
      <div className={styles.since}>
        <div className={styles.text10}>Since</div>
        <div className={styles.text13}>1998</div>
      </div>
      <div className={styles.specialization}>
        <div className={styles.text10}>Specialization</div>
        <div className={styles.text17}>
          Search technology, Web computing, Software and Online advertising
        </div>
      </div>
      <div className={styles.companyGallery}>
        <div className={styles.text10}>Company Gallery</div>
        <img
          className={styles.unsplashgmsnxqiljp4Icon}
          alt=""
          src="/unsplashgmsnxqiljp4@2x.png"
        />
        <img
          className={styles.unsplashuevezouyhgwIcon}
          alt=""
          src="/unsplashuevezouyhgw@2x.png"
        />
        <img
          className={styles.unsplashwd1lrb9oeeoIcon}
          alt=""
          src="/unsplashwd1lrb9oeeo@2x.png"
        />
        <div className={styles.unsplashwd1lrb9oeeo} />
        <div className={styles.pictures}>+5 pictures</div>
      </div>
      <div className={styles.menuBar}>
        <img className={styles.menuBarChild} alt="" src="/rectangle68.svg" />
        <img className={styles.buttonIcon1} alt="" src="/button19.svg" />
        <div className={styles.button3}>
          <img className={styles.buttonIcon2} alt="" src="/button.svg" />
          <b className={styles.text18}>Apply Now</b>
        </div>
      </div>
      <div className={styles.tabMenuParent}>
        <div className={styles.tabMenu}>
          <div className={styles.button4}>
            <div className={styles.button5} />
            <b className={styles.text19}>Company</b>
          </div>
        </div>
        <div className={styles.button6} />
        <b className={styles.text20}>Description</b>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangle} />
        <b className={styles.text21}>IT Senior</b>
        <div className={styles.text22}>KACST</div>
        <div className={styles.text23}>{`Riyadh `}</div>
        <div className={styles.text24}>1 day ago</div>
        <div className={styles.imege} />
        <div className={styles.imege1} />
        <img className={styles.imegeIcon2} alt="" src="/imege6@2x.png" />
      </div>
    </div>
  );
};

export default Company;
