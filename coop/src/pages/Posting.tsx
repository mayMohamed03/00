import { FunctionComponent } from "react";
import styles from "./Posting.module.css";

const Posting: FunctionComponent = () => {
  return (
    <div className={styles.posting}>
      <div className={styles.company}>
        <div className={styles.companyChild} />
      </div>
      <div className={styles.amalAlmutairi}>
        <div className={styles.rectangle} />
        <div className={styles.arnoldLeonardo}>
          <img className={styles.icon} alt="" src="/icon.svg" />
          <b className={styles.text}>Amal almutairi</b>
          <div className={styles.text1}>21 minuts ago</div>
        </div>
        <div className={styles.likeCommentAndShared}>
          <img className={styles.rectangleIcon} alt="" src="/rectangle73.svg" />
          <div className={styles.like}>
            <div className={styles.likeChild} />
            <div className={styles.button}>
              <div className={styles.button} />
              <img className={styles.imegeIcon} alt="" src="/imege54.svg" />
            </div>
            <div className={styles.div}>12</div>
          </div>
          <div className={styles.comment}>
            <img className={styles.button} alt="" src="/icon26.svg" />
            <div className={styles.div}>10</div>
          </div>
          <div className={styles.comment1}>
            <div className={styles.div}>2</div>
            <img className={styles.icon2} alt="" src="/icon27@2x.png" />
          </div>
        </div>
        <b className={styles.text5}>
          What are the characteristics of a fake trainin call form?
        </b>
        <div className={styles.text6}>
          Because I always find fake trainin calls so I'm confused which trainin
          to take can you share your knowledge here? thank you
        </div>
        <img className={styles.imegeIcon1} alt="" src="/imege55@2x.png" />
      </div>
      <div className={styles.nora}>
        <div className={styles.rectangle} />
        <div className={styles.sarahConnor}>
          <img className={styles.imegeIcon2} alt="" src="/imege56@2x.png" />
          <img className={styles.icon3} alt="" src="/icon.svg" />
          <b className={styles.text7}>Nora</b>
          <div className={styles.text8}>45 minuts ago</div>
        </div>
        <div className={styles.likeCommentAndShared1}>
          <img className={styles.rectangleIcon} alt="" src="/rectangle74.svg" />
          <div className={styles.like1}>
            <div className={styles.likeChild} />
            <div className={styles.button}>
              <div className={styles.button} />
              <img className={styles.imegeIcon} alt="" src="/imege54.svg" />
            </div>
            <div className={styles.div}>12</div>
          </div>
          <div className={styles.comment2}>
            <img className={styles.button} alt="" src="/icon28.svg" />
            <div className={styles.div}>10</div>
          </div>
          <div className={styles.comment3}>
            <div className={styles.div}>2</div>
            <img className={styles.icon2} alt="" src="/icon29@2x.png" />
          </div>
        </div>
        <b className={styles.text9}>What is the cooperative training?</b>
        <div className={styles.text10}>
          <p className={styles.cooperativeTrainingProgram}>
            ​ Cooperative training program is offered to students in order to
            give them a chance to receive professional training and experience
            in an actual work environment. The cooperative training program
            is an ongoing seminar between the student, the faculty member and
            the employment supervisor.
          </p>
        </div>
      </div>
      <img className={styles.menuBarIcon} alt="" src="/menu-bar2.svg" />
      <div className={styles.recentUpdaets}>
        <img className={styles.buttonIcon} alt="" src="/button26@2x.png" />
        <img className={styles.plusSolid1Icon} alt="" src="/plussolid-1.svg" />
        <img className={styles.buttonIcon1} alt="" src="/button27@2x.png" />
        <img className={styles.buttonIcon2} alt="" src="/button28@2x.png" />
        <img className={styles.buttonIcon3} alt="" src="/button29@2x.png" />
        <b className={styles.text11}>Recent updaets</b>
        <img className={styles.buttonIcon4} alt="" src="/button30@2x.png" />
      </div>
      <img className={styles.imegeIcon3} alt="" src="/imege33@2x.png" />
      <img className={styles.buttonIcon5} alt="" src="/button31.svg" />
      <div className={styles.textbox}>
        <div className={styles.textbox1}>
          <div className={styles.button2}>
            <div className={styles.text12}>􀊫</div>
          </div>
          <div className={styles.text13}>Search</div>
        </div>
        <div className={styles.cancel}>
          <div className={styles.cancel1}>Cancel</div>
        </div>
      </div>
      <img className={styles.imegeIcon4} alt="" src="/imege57@2x.png" />
    </div>
  );
};

export default Posting;
