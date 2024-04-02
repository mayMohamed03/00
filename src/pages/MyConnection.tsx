import { FunctionComponent } from "react";
import styles from "./MyConnection.module.css";

const MyConnection: FunctionComponent = () => {
  return (
    <div className={styles.myConnection}>
      <div className={styles.googleInc}>
        <img className={styles.googleIncChild} alt="" src="/rectangle.svg" />
        <div className={styles.googleIncItem} />
        <b className={styles.text}>KACST</b>
        <div className={styles.text1}>1M Followers</div>
        <div className={styles.text2}>Follow</div>
        <div className={styles.imege} />
        <img className={styles.imegeIcon} alt="" src="/imege@2x.png" />
      </div>
      <div className={styles.sabicInc}>
        <img className={styles.googleIncChild} alt="" src="/rectangle.svg" />
        <div className={styles.googleIncItem} />
        <img className={styles.imegeIcon1} alt="" src="/imege@2x.png" />
        <b className={styles.text3}>{`Sabic `}</b>
        <div className={styles.text1}>1M Followers</div>
        <div className={styles.text2}>Follow</div>
      </div>
      <div className={styles.riyadBank}>
        <img className={styles.googleIncChild} alt="" src="/rectangle.svg" />
        <img className={styles.imegeIcon2} alt="" src="/imege@2x.png" />
        <div className={styles.googleIncItem} />
        <b className={styles.text6}>Riyad Bank</b>
        <div className={styles.text1}>1M Followers</div>
        <div className={styles.text2}>Follow</div>
      </div>
      <div className={styles.stcInc}>
        <img className={styles.googleIncChild} alt="" src="/rectangle.svg" />
        <div className={styles.googleIncItem} />
        <div className={styles.dribbbleLogo}>
          <div className={styles.imege1} />
          <div className={styles.rectangle} />
          <img className={styles.imegeIcon3} alt="" src="/imege@2x.png" />
        </div>
        <b className={styles.text9}>STC Inc</b>
        <div className={styles.text1}>1M Followers</div>
        <div className={styles.text2}>Follow</div>
      </div>
      <div className={styles.googleInc1}>
        <img className={styles.googleIncChild} alt="" src="/rectangle.svg" />
        <div className={styles.googleIncItem} />
        <div className={styles.imege2} />
        <img className={styles.appleLogoIcon} alt="" src="/apple-logo@2x.png" />
        <b className={styles.text12}>Apple Inc</b>
        <div className={styles.text1}>1M Followers</div>
        <b className={styles.text2}>Follow</b>
      </div>
      <div className={styles.microsoft}>
        <img className={styles.googleIncChild} alt="" src="/rectangle.svg" />
        <div className={styles.googleIncItem} />
        <img className={styles.imegeIcon4} alt="" src="/imege@2x.png" />
        <b className={styles.text15}>Microsoft Inc</b>
        <div className={styles.text1}>1M Followers</div>
        <div className={styles.text2}>Follow</div>
      </div>
      <img className={styles.menuBarIcon} alt="" src="/menu-bar.svg" />
      <div className={styles.company}>
        <div className={styles.companyChild} />
        <div className={styles.text18}>Posting</div>
      </div>
      <div className={styles.posting}>
        <div className={styles.postingChild} />
      </div>
      <b className={styles.text19}>My connection</b>
    </div>
  );
};

export default MyConnection;
