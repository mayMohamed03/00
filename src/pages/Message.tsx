import { FunctionComponent } from "react";
import styles from "./Message.module.css";

const Message: FunctionComponent = () => {
  return (
    <div className={styles.message}>
      <div className={styles.button}>
        <div className={styles.notifNewMessage}>
          <div className={styles.imege} />
          <div className={styles.text}>2</div>
        </div>
        <img className={styles.imegeIcon} alt="" src="/imege@2x.png" />
        <b className={styles.text1}>Oh yes, please send your CV/Res...</b>
        <b className={styles.text2}>saad alghtani</b>
        <div className={styles.text3}>5m ago</div>
      </div>
      <div className={styles.button1}>
        <div className={styles.text4}>Hello sir, Good Morning</div>
        <b className={styles.text5}>Bander alutibi</b>
        <img className={styles.imegeIcon1} alt="" src="/imege@2x.png" />
        <div className={styles.text6}>30m ago</div>
      </div>
      <div className={styles.button2}>
        <img className={styles.imegeIcon2} alt="" src="/imege@2x.png" />
        <div className={styles.text7}>I saw the IT Student vac...</div>
        <b className={styles.text8}>Mai bader</b>
        <div className={styles.text9}>09:30 am</div>
      </div>
      <img className={styles.buttonIcon} alt="" src="/button.svg" />
      <div className={styles.button3}>
        <img className={styles.imegeIcon2} alt="" src="/imege@2x.png" />
        <div className={styles.text7}>I saw the IT student vac...</div>
        <b className={styles.text8}>Megan Rapinoe</b>
        <div className={styles.text12}>01:00 pm</div>
      </div>
      <div className={styles.button4}>
        <img className={styles.imegeIcon2} alt="" src="/imege@2x.png" />
        <div className={styles.text7}>I saw the IT Student vac...</div>
        <b className={styles.text8}>Alessandro Bastoni</b>
        <div className={styles.text12}>06:00 pm</div>
      </div>
      <div className={styles.button5}>
        <img className={styles.imegeIcon5} alt="" src="/imege@2x.png" />
        <div className={styles.text16}>I saw the IT Student vac...</div>
        <b className={styles.text17}>Ilkay Gundogan</b>
        <div className={styles.text18}>Yesterday</div>
      </div>
      <img className={styles.writeIcon} alt="" src="/write.svg" />
      <div className={styles.search}>
        <img className={styles.searchChild} alt="" src="/rectangle.svg" />
        <img className={styles.iconSearch} alt="" src="/icon-search.svg" />
        <div className={styles.searchMessage}>Search message</div>
      </div>
      <img className={styles.buttonIcon1} alt="" src="/options.svg" />
      <b className={styles.text19}>Messages</b>
      <img className={styles.menuBarIcon} alt="" src="/menu-bar.svg" />
    </div>
  );
};

export default Message;
