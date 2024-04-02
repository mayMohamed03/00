import { FunctionComponent } from "react";
import styles from "./Logo.module.css";

const Logo: FunctionComponent = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.logoChild} alt="" src="/rectangle-225@2x.png" />
    </div>
  );
};

export default Logo;
