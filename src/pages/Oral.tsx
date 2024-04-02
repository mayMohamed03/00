import { FunctionComponent } from "react";
import styles from "./Oral.module.css";

const Oral: FunctionComponent = () => {
  return (
    <div className={styles.oral}>
      <div className={styles.back}>
        <div className={styles.backChild} />
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.addLanguage}>
        <div className={styles.language}>
          <img className={styles.languageChild} alt="" src="/rectangle.svg" />
          <img className={styles.languageItem} alt="" src="/line.svg" />
          <div className={styles.language1}>
            <img
              className={styles.languageInner}
              alt=""
              src="/rectangle@2x.png"
            />
            <div className={styles.indonesian}>Indonesian</div>
            <div className={styles.language2}>Language</div>
          </div>
          <div className={styles.firstLanguage}>
            <b className={styles.firstLanguage1}>First language</b>
            <img className={styles.selectIcon} alt="" src="/group-50.svg" />
          </div>
        </div>
        <div className={styles.proficiencyLevel}>
          <img
            className={styles.proficiencyLevelChild}
            alt=""
            src="/rectangle.svg"
          />
          <img className={styles.proficiencyLevelItem} alt="" src="/line.svg" />
          <div className={styles.written}>
            <b className={styles.written1}>Written</b>
            <div className={styles.chooseYourSpeaking}>
              Choose your speaking skill level
            </div>
            <img className={styles.addIcon} alt="" src="/add.svg" />
          </div>
          <div className={styles.oral1}>
            <b className={styles.written1}>Oral</b>
            <div className={styles.chooseYourSpeaking}>level 10</div>
            <img className={styles.addIcon} alt="" src="/button.svg" />
          </div>
        </div>
        <div className={styles.text}>
          Proficiency level : 0 - Poor, 10 - Very good
        </div>
        <b className={styles.text1}>Add Language</b>
      </div>
      <div className={styles.save}>
        <div className={styles.button} />
        <b className={styles.text2}>Save</b>
      </div>
      <div className={styles.popUp}>
        <div className={styles.button1} />
        <img className={styles.popUpChild} alt="" src="/rectangle.svg" />
        <div className={styles.done}>
          <div className={styles.button2} />
          <b className={styles.text3}>Done</b>
        </div>
        <div className={styles.level}>
          <div className={styles.level101}>
            <div className={styles.textWrapper}>
              <div className={styles.firstLanguage1}>Level 10</div>
            </div>
            <img className={styles.selectIcon1} alt="" src="/group-50.svg" />
          </div>
          <div className={styles.level9}>
            <div className={styles.firstLanguage1}>Level 9</div>
            <img className={styles.selectIcon2} alt="" src="/select.svg" />
          </div>
          <div className={styles.level8}>
            <div className={styles.firstLanguage1}>Level 8</div>
            <img className={styles.selectIcon2} alt="" src="/select.svg" />
          </div>
          <div className={styles.level7}>
            <div className={styles.firstLanguage1}>Level 7</div>
            <img className={styles.selectIcon2} alt="" src="/select.svg" />
          </div>
          <div className={styles.level6}>
            <div className={styles.firstLanguage1}>Level 6</div>
            <img className={styles.selectIcon2} alt="" src="/select.svg" />
          </div>
          <div className={styles.level5}>
            <div className={styles.firstLanguage1}>Level 5</div>
            <img className={styles.selectIcon2} alt="" src="/select.svg" />
          </div>
          <div className={styles.level4}>
            <div className={styles.firstLanguage1}>Level 4</div>
            <img className={styles.selectIcon2} alt="" src="/select.svg" />
          </div>
          <div className={styles.level3}>
            <div className={styles.firstLanguage1}>Level 3</div>
            <img className={styles.selectIcon8} alt="" src="/select.svg" />
          </div>
          <div className={styles.level2}>
            <div className={styles.firstLanguage1}>Level 2</div>
            <img className={styles.selectIcon8} alt="" src="/select.svg" />
          </div>
          <div className={styles.level1}>
            <div className={styles.firstLanguage1}>Level 1</div>
            <img className={styles.selectIcon2} alt="" src="/select.svg" />
          </div>
          <div className={styles.level0}>
            <div className={styles.firstLanguage1}>Level 0</div>
            <img className={styles.selectIcon2} alt="" src="/select.svg" />
          </div>
        </div>
        <img className={styles.lineIcon1} alt="" src="/line.svg" />
      </div>
    </div>
  );
};

export default Oral;
