import { FunctionComponent } from "react";
import styles from "./Post.module.css";

const Post: FunctionComponent = () => {
  return (
    <div className={styles.post}>
      <div className={styles.arnoldLeonardo}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
        <div className={styles.arnoldLeonardo1}>
          <img className={styles.imegeIcon} alt="" src="/imege@2x.png" />
          <img className={styles.icon} alt="" src="/icon.svg" />
          <b className={styles.text}>KACST</b>
          <div className={styles.text1}>21 minuts ago</div>
        </div>
        <div className={styles.likeCommentAndShared}>
          <img className={styles.rectangleIcon1} alt="" src="/rectangle.svg" />
          <div className={styles.like}>
            <div className={styles.likeChild} />
            <div className={styles.button}>
              <div className={styles.button} />
              <img className={styles.imegeIcon1} alt="" src="/imege.svg" />
            </div>
            <div className={styles.text2}>12</div>
          </div>
          <div className={styles.comment}>
            <img className={styles.button} alt="" src="/icon.svg" />
            <div className={styles.text2}>10</div>
          </div>
          <div className={styles.comment1}>
            <div className={styles.text4}>2</div>
            <img className={styles.icon3} alt="" src="/icon@2x.png" />
          </div>
        </div>
        <div className={styles.text5}>
          <span>{`It is important to take care of the patient, to be followed by the client, but at the same time they will be affected by some great pains and sufferings. In fact, to come to the point, who does not work with any exercise.... `}</span>
          <span className={styles.readMore}>Read more</span>
        </div>
        <b className={styles.text6}>What's it like to training at KACST?</b>
        <a
          className={styles.button1}
          href="https://www.youtube.com/user/KacstTV"
          target="_blank"
        >
          (4) KACST - YouTube
        </a>
      </div>
      <div className={styles.tabMenu}>
        <div className={styles.rectangle} />
        <div className={styles.description}>
          <div className={styles.button2} />
          <b className={styles.text7}>About us</b>
        </div>
        <div className={styles.company}>
          <div className={styles.button2} />
          <b className={styles.text8}>training</b>
        </div>
        <div className={styles.buttonParent}>
          <div className={styles.button4} />
          <b className={styles.text9}>Post</b>
        </div>
      </div>
      <img className={styles.optionsIcon} alt="" src="/options.svg" />
      <div className={styles.optionsParent}>
        <img className={styles.optionsIcon1} alt="" src="/options.svg" />
        <div className={styles.back}>
          <div className={styles.back} />
          <img className={styles.imegeIcon2} alt="" src="/imege.svg" />
        </div>
      </div>
      <img className={styles.imegeIcon3} alt="" src="/imege@2x.png" />
      <img className={styles.playIcon} alt="" src="/play.svg" />
      <div className={styles.buttonGroup}>
        <img className={styles.buttonIcon} alt="" src="/button.svg" />
        <img className={styles.icon4} alt="" src="/icon.svg" />
        <div className={styles.text10}>Visit website</div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.button6} />
        <img className={styles.addIcon} alt="" src="/add.svg" />
        <div className={styles.text11}>Follow</div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangle1} />
        <b className={styles.text12}>IT Senior</b>
        <div className={styles.text13}>KACST</div>
        <div className={styles.text14}>{`Riyadh `}</div>
        <div className={styles.text15}>1 day ago</div>
        <div className={styles.imege} />
        <div className={styles.imege1} />
        <img className={styles.imegeIcon4} alt="" src="/imege@2x.png" />
      </div>
    </div>
  );
};

export default Post;
