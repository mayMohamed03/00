import { FunctionComponent } from "react";
import styles from "./Chat.module.css";

const Chat: FunctionComponent = () => {
  return (
    <div className={styles.chat}>
      <div className={styles.chat2}>
        <img className={styles.chat2Child} alt="" src="/rectangle-98.svg" />
        <img className={styles.imegeIcon} alt="" src="/imege@2x.png" />
        <div className={styles.text}>Morning, Can i help you ?</div>
        <div className={styles.text1}>09:31 am</div>
      </div>
      <div className={styles.chat3}>
        <img className={styles.chat3Child} alt="" src="/rectangle.svg" />
        <img className={styles.imegeIcon1} alt="" src="/imege@2x.png" />
        <div className={styles.text2}>
          Oh yes, please send your CV/Resume here
        </div>
        <div className={styles.text3}>09:35 am</div>
      </div>
      <div className={styles.chat1}>
        <img className={styles.chat1Child} alt="" src="/rectangle.svg" />
        <div className={styles.text4}>Hello sir, Good Morning</div>
        <div className={styles.text5}>09:30 am</div>
        <img
          className={styles.doubleCeklisIcon}
          alt=""
          src="/double-ceklis.svg"
        />
      </div>
      <div className={styles.chat11}>
        <img className={styles.chat1Item} alt="" src="/rectangle.svg" />
        <div className={styles.text6}>
          I saw the UI/UX Beginner designer vacancy that you uploaded on
          linkedin yesterday and I am interested in joining your company.
        </div>
        <div className={styles.text7}>09:33 am</div>
        <img
          className={styles.doubleCeklisIcon1}
          alt=""
          src="/double-ceklis.svg"
        />
      </div>
      <div className={styles.sendMassage}>
        <img className={styles.sendMassageChild} alt="" src="/rectangle.svg" />
        <div className={styles.text8}>Write your massage</div>
        <img className={styles.sendIcon} alt="" src="/send@2x.png" />
        <img className={styles.attachmentIcon} alt="" src="/attachment.svg" />
      </div>
      <div className={styles.jametCvUiuxDesigner}>
        <img
          className={styles.jametCvUiuxDesignerChild}
          alt=""
          src="/rectangle.svg"
        />
        <img className={styles.optionsIcon} alt="" src="/options.svg" />
        <div className={styles.pdf}>
          <div className={styles.pdfChild} />
          <img className={styles.pdfItem} alt="" src="/rectangle.svg" />
          <img className={styles.lineIcon} alt="" src="/line.svg" />
          <div className={styles.text9}>PDF</div>
        </div>
        <div className={styles.text10}>Sara Ali - CV - IT Student</div>
        <div className={styles.text11}>867 Kb PDF</div>
        <div className={styles.text12}>09:33 am</div>
        <img
          className={styles.doubleCeklisIcon2}
          alt=""
          src="/double-ceklis.svg"
        />
      </div>
      <div className={styles.text13}>Today</div>
      <div className={styles.chatChild} />
      <img className={styles.optionsIcon1} alt="" src="/options.svg" />
      <div className={styles.iconCall}>
        <div className={styles.button} />
        <img className={styles.imegeIcon2} alt="" src="/imege.svg" />
      </div>
      <img className={styles.iconSearch} alt="" src="/icon-search.svg" />
      <div className={styles.andyRobertson}>
        <b className={styles.text14}>sara Ali</b>
        <div className={styles.text15}>Online</div>
        <div className={styles.imege} />
      </div>
      <div className={styles.button1}>
        <div className={styles.button2} />
        <img className={styles.lineIcon1} alt="" src="/line.svg" />
      </div>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
    </div>
  );
};

export default Chat;
