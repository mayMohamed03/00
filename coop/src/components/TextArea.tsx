import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TextArea.module.css";

export type TextAreaType = {
  textArae?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
};

const TextArea: FunctionComponent<TextAreaType> = ({
  textArae,
  propTop,
  propHeight,
  propHeight1,
}) => {
  const textAreaStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      height: propHeight,
    };
  }, [propTop, propHeight]);

  const textAraeIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <div className={styles.textarea} style={textAreaStyle}>
      <img
        className={styles.textaraeIcon}
        alt=""
        src={textArae}
        style={textAraeIconStyle}
      />
      <b className={styles.text}>Information</b>
      <div className={styles.text1}>
        Explain why you are the right person for this training
      </div>
    </div>
  );
};

export default TextArea;
