import { FunctionComponent } from "react";
import styles from "./Options1.module.css";

const Options1: FunctionComponent = () => {
  return (
    <div className={styles.options}>
      <div className={styles.optionsChild} />
      <div className={styles.imege} />
      <div className={styles.imege1} />
      <div className={styles.imege2} />
    </div>
  );
};

export default Options1;
