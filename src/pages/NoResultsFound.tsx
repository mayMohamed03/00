import { FunctionComponent } from "react";
import styles from "./NoResultsFound.module.css";

const NoResultsFound: FunctionComponent = () => {
  return (
    <div className={styles.noResultsFound}>
      <div className={styles.header}>
        <div className={styles.search}>
          <img className={styles.textboxIcon} alt="" src="/textbox.svg" />
          <img className={styles.iconSearch} alt="" src="/icon-search.svg" />
          <div className={styles.text}>Design</div>
        </div>
      </div>
      <div className={styles.back}>
        <div className={styles.button} />
        <img className={styles.imegeIcon} alt="" src="/imege.svg" />
      </div>
      <div className={styles.noSavings}>
        <b className={styles.text1}>No results found</b>
        <div className={styles.text2}>
          The search could not be found, please check spelling or write another
          word.
        </div>
      </div>
      <img className={styles.illustrasiIcon} alt="" src="/illustrasi.svg" />
    </div>
  );
};

export default NoResultsFound;
