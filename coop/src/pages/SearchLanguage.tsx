import { FunctionComponent } from "react";
import styles from "./SearchLanguage.module.css";

const SearchLanguage: FunctionComponent = () => {
  return (
    <div className={styles.searchLanguage}>
      <div className={styles.back}>
        <div className={styles.backChild} />
        <img className={styles.lineIcon} alt="" src="/line13.svg" />
      </div>
      <div className={styles.addLanguageWrapper}>
        <div className={styles.addLanguage}>
          <div className={styles.arabic}>
            <img
              className={styles.buttonhoverIcon}
              alt=""
              src="/buttonhover.svg"
            />
            <div className={styles.text}>Indonesian</div>
          </div>
          <div className={styles.indonesian}>
            <img
              className={styles.buttonhoverIcon1}
              alt=""
              src="/buttonhover1.svg"
            />
            <div className={styles.text}>Arabic</div>
          </div>
          <div className={styles.malaysian}>
            <img
              className={styles.buttonhoverIcon}
              alt=""
              src="/buttonhover.svg"
            />
            <img
              className={styles.malaysianChild}
              alt=""
              src="/rectangle54@2x.png"
            />
            <div className={styles.text}>Malaysian</div>
          </div>
          <div className={styles.english}>
            <img
              className={styles.buttonhoverIcon}
              alt=""
              src="/buttonhover.svg"
            />
            <img
              className={styles.englishChild}
              alt=""
              src="/rectangle55.svg"
            />
            <img
              className={styles.englishItem}
              alt=""
              src="/rectangle56@2x.png"
            />
            <div className={styles.text}>English</div>
          </div>
          <div className={styles.french}>
            <img
              className={styles.buttonhoverIcon}
              alt=""
              src="/buttonhover.svg"
            />
            <img
              className={styles.englishItem}
              alt=""
              src="/rectangle57@2x.png"
            />
            <div className={styles.text}>French</div>
          </div>
          <div className={styles.german}>
            <img
              className={styles.buttonhoverIcon}
              alt=""
              src="/buttonhover.svg"
            />
            <img
              className={styles.englishItem}
              alt=""
              src="/rectangle58@2x.png"
            />
            <div className={styles.text}>German</div>
          </div>
          <div className={styles.hindi}>
            <img
              className={styles.buttonhoverIcon}
              alt=""
              src="/buttonhover.svg"
            />
            <img
              className={styles.englishItem}
              alt=""
              src="/rectangle59@2x.png"
            />
            <div className={styles.text}>Hindi</div>
          </div>
          <div className={styles.italian}>
            <img
              className={styles.buttonhoverIcon}
              alt=""
              src="/buttonhover.svg"
            />
            <img
              className={styles.englishItem}
              alt=""
              src="/rectangle60@2x.png"
            />
            <div className={styles.text}>Italian</div>
          </div>
          <div className={styles.japanese}>
            <img
              className={styles.buttonhoverIcon}
              alt=""
              src="/buttonhover.svg"
            />
            <img
              className={styles.englishItem}
              alt=""
              src="/rectangle61@2x.png"
            />
            <div className={styles.text}>Japanese</div>
          </div>
          <div className={styles.korean}>
            <img
              className={styles.buttonhoverIcon}
              alt=""
              src="/buttonhover.svg"
            />
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="/mask-group7@2x.png"
            />
            <div className={styles.text}>Korean</div>
          </div>
          <div className={styles.search}>
            <img className={styles.textboxIcon} alt="" src="/textbox1.svg" />
            <img className={styles.iconSearch} alt="" src="/icon-search1.svg" />
            <div className={styles.text10}>Search skills</div>
          </div>
          <b className={styles.text11}>Add Language</b>
        </div>
      </div>
      <img
        className={styles.searchLanguageChild}
        alt=""
        src="/rectangle62@2x.png"
      />
      <img
        className={styles.searchLanguageItem}
        alt=""
        src="/rectangle63@2x.png"
      />
    </div>
  );
};

export default SearchLanguage;
