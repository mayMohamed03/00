import { FunctionComponent } from "react";
import styles from "./RemoveLanguage.module.css";

const RemoveLanguage: FunctionComponent = () => {
  return (
    <div className={styles.removeLanguage}>
      <div className={styles.back}>
        <div className={styles.backChild} />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.addLanguage}>
        <div className={styles.indonesian}>
          <img className={styles.indonesianChild} alt="" src="/rectangle.svg" />
          <img className={styles.icon} alt="" src="/icon.svg" />
          <img
            className={styles.indonesianItem}
            alt=""
            src="/rectangle@2x.png"
          />
          <b className={styles.text}>Arabic(First language)</b>
          <div className={styles.text1}>Oral : Level 10</div>
          <div className={styles.text2}>Written : Level 10</div>
        </div>
        <div className={styles.english}>
          <img className={styles.indonesianChild} alt="" src="/rectangle.svg" />
          <img className={styles.icon} alt="" src="/icon.svg" />
          <img
            className={styles.indonesianItem}
            alt=""
            src="/rectangle@2x.png"
          />
          <div className={styles.text3}>English</div>
          <div className={styles.text1}>Oral : Level 8</div>
          <div className={styles.text2}>Written : Level 8</div>
        </div>
        <div className={styles.add}>
          <img className={styles.iconAdd} alt="" src="/add.svg" />
          <div className={styles.text6}>Add</div>
        </div>
        <div className={styles.text7}>Language</div>
      </div>
      <div className={styles.save}>
        <div className={styles.saveChild} />
        <div className={styles.text8}>Save</div>
      </div>
      <div className={styles.popUp}>
        <div className={styles.popUpChild} />
        <img className={styles.popUpItem} alt="" src="/rectangle.svg" />
        <div className={styles.buttonRemoveSave}>
          <div className={styles.button}>
            <div className={styles.button1} />
            <b className={styles.text9}>Continue Filling</b>
          </div>
          <div className={styles.button2}>
            <div className={styles.button3} />
            <b className={styles.text10}>Undo Changes</b>
          </div>
        </div>
        <div className={styles.text11}>
          Are you sure you want to delete this Arabic language?
        </div>
        <b className={styles.text12}>Remove Arabic ?</b>
        <img className={styles.lineIcon1} alt="" src="/line.svg" />
      </div>
      <img
        className={styles.removeLanguageChild}
        alt=""
        src="/rectangle@2x.png"
      />
    </div>
  );
};

export default RemoveLanguage;
