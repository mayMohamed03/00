import { FunctionComponent } from "react";
import DescriptionContainer from "../components/DescriptionContainer";
import styles from "./AddPost.module.css";

const AddPost: FunctionComponent = () => {
  return (
    <div className={styles.addPost}>
      <div className={styles.menuBar}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
        <img className={styles.iconCamera} alt="" src="/icon-camera.svg" />
        <img className={styles.iconPicture} alt="" src="/icon-picture.svg" />
        <div className={styles.button}>Add hashtag</div>
      </div>
      <div className={styles.brandoneLouis}>
        <b className={styles.text}>sara Alii</b>
        <div className={styles.text1}>
          <b>Riyad</b>
          <span>, KSA</span>
        </div>
      </div>
      <div className={styles.addWorkExperience}>
        <div className={styles.jobTitle}>
          <img className={styles.textboxIcon} alt="" src="/textbox.svg" />
          <div className={styles.text2}>Post title</div>
          <div className={styles.text3}>Write the title of your post here</div>
        </div>
        <DescriptionContainer />
      </div>
      <div className={styles.back}>
        <div className={styles.button1} />
        <img className={styles.imegeIcon} alt="" src="/line.svg" />
      </div>
      <b className={styles.text4}>Add Post</b>
      <b className={styles.button2}>Post</b>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
    </div>
  );
};

export default AddPost;
