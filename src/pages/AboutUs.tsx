import { FunctionComponent } from "react";
import styles from "./AboutUs.module.css";

const AboutUs: FunctionComponent = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.back}>
        <div className={styles.backChild} />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.buttonApplyNow}>
        <img
          className={styles.buttonApplyNowChild}
          alt=""
          src="/rectangle.svg"
        />
        <img className={styles.buttonIcon} alt="" src="/button.svg" />
        <div className={styles.button}>
          <img className={styles.buttonIcon1} alt="" src="/button.svg" />
          <b className={styles.text}>Apply Now</b>
        </div>
      </div>
      <div className={styles.tabMenu}>
        <div className={styles.tabMenuChild} />
        <div className={styles.description}>
          <div className={styles.button1} />
          <b className={styles.text1}>About us</b>
        </div>
        <div className={styles.company}>
          <div className={styles.button2} />
          <b className={styles.text2}>training</b>
        </div>
        <div className={styles.buttonParent}>
          <div className={styles.button2} />
          <b className={styles.text3}>Post</b>
        </div>
      </div>
      <img className={styles.optionsIcon} alt="" src="/options.svg" />
      <div className={styles.aboutCompany}>
        <b className={styles.text4}>About Company</b>
        <div className={styles.text5}>
          King Abdulaziz City for Science and Technology (KACST) applies applied
          scientific research to serve the development and provide counsel
          scientific at the national level. It develops mechanisms to transform
          the outputs of scientific research and technical development into
          industrial products.
        </div>
      </div>
      <div className={styles.website}>
        <b className={styles.text6}>Website</b>
        <a
          className={styles.text7}
          href="https://kacst.gov.sa/"
          target="_blank"
        >
          KACST
        </a>
      </div>
      <div className={styles.industry}>
        <b className={styles.text6}>Industry</b>
        <div className={styles.text9}>Internet product</div>
      </div>
      <div className={styles.employeeSize}>
        <b className={styles.text6}>Employee size</b>
        <div className={styles.text9}>132,121 Employees</div>
      </div>
      <div className={styles.headOffice}>
        <b className={styles.text6}>Head office</b>
        <div className={styles.text9}>
          <p className={styles.kingAbdullahRoad}>
            King Abdullah Road, Al-Raed, Riyadh 12354
          </p>
        </div>
      </div>
      <div className={styles.type}>
        <b className={styles.text6}>Type</b>
        <div className={styles.text9}>City for Science and Technology</div>
      </div>
      <div className={styles.since}>
        <b className={styles.text6}>Since</b>
        <div className={styles.text9}>2009</div>
      </div>
      <div className={styles.specialization}>
        <b className={styles.text6}>Specialization</b>
        <div className={styles.text19}>
          Search technology, Web computing, Software and Online advertising
        </div>
      </div>
      <div className={styles.companyGallery}>
        <div className={styles.text20}>Company Gallery</div>
      </div>
      <div className={styles.optionsParent}>
        <img className={styles.optionsIcon1} alt="" src="/options.svg" />
        <div className={styles.backChild}>
          <div className={styles.backChild} />
          <img className={styles.lineIcon} alt="" src="/imege.svg" />
        </div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/button.svg" />
        <img className={styles.icon} alt="" src="/icon.svg" />
        <div className={styles.text21}>Visit website</div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupItem} />
        <img className={styles.addIcon} alt="" src="/add.svg" />
        <div className={styles.text22}>Follow</div>
      </div>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <img className={styles.imageIcon1} alt="" src="/image@2x.png" />
      <div className={styles.unsplashwd1lrb9oeeo} />
      <b className={styles.text23}>+5 pictures</b>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupInner} />
        <b className={styles.text24}>IT Senior</b>
        <div className={styles.text25}>KACST</div>
        <div className={styles.text26}>{`Riyadh `}</div>
        <div className={styles.text27}>1 day ago</div>
        <div className={styles.imege} />
        <div className={styles.imege1} />
        <img className={styles.imegeIcon} alt="" src="/imege@2x.png" />
      </div>
    </div>
  );
};

export default AboutUs;
