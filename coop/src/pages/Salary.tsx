import { FunctionComponent } from "react";
import styles from "./Salary.module.css";

const Salary: FunctionComponent = () => {
  return (
    <div className={styles.salary}>
      <img className={styles.salaryChild} alt="" src="/rectangle70.svg" />
      <img className={styles.lineIcon} alt="" src="/line16.svg" />
      <img className={styles.lineIcon1} alt="" src="/line22.svg" />
      <img className={styles.lineIcon2} alt="" src="/line23.svg" />
      <div className={styles.imege} />
      <div className={styles.imege1} />
      <div className={styles.text}>Salary</div>
      <b className={styles.text1}>$13k</b>
      <b className={styles.text2}>$25k</b>
    </div>
  );
};

export default Salary;
