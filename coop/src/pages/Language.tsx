import { FunctionComponent } from "react";
import styles from "./Language.module.css";

const Language: FunctionComponent = () => {
  return (
    <div className={styles.language}>
      <div className={styles.back}>
        <div className={styles.button} />
        <img className={styles.lineIcon} alt="" src="/line13.svg" />
      </div>
      <div className={styles.addLanguage}>
        <div className={styles.indonesian}>
          <img
            className={styles.indonesianChild}
            alt=""
            src="/rectangle64.svg"
          />
          <img className={styles.icon} alt="" src="/icon18.svg" />
          <b className={styles.text}>Arabic(First language)</b>
          <div className={styles.text1}>Oral : Level 10</div>
          <div className={styles.text2}>Written : Level 10</div>
          <img
            className={styles.indonesianItem}
            alt=""
            src="/rectangle62@2x.png"
          />
        </div>
        <div className={styles.english}>
          <img
            className={styles.indonesianChild}
            alt=""
            src="/rectangle64.svg"
          />
          <img className={styles.icon} alt="" src="/icon18.svg" />
          <img
            className={styles.indonesianItem}
            alt=""
            src="/rectangle56@2x.png"
          />
          <b className={styles.text}>English</b>
          <div className={styles.text1}>Oral : Level 8</div>
          <div className={styles.text2}>Written : Level 8</div>
        </div>
        <div className={styles.add}>
          <img className={styles.iconAdd} alt="" src="/icon-add.svg" />
          <b className={styles.text6}>Add</b>
        </div>
        <b className={styles.text7}>Language</b>
      </div>
      <div className={styles.save}>
        <div className={styles.button1} />
        <b className={styles.text8}>Save</b>
      </div>
    </div>
  );
};

export default Language;
