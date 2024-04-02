import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TextBox.module.css";

export type TextBoxType = {
  text?: string;
  text1?: string;
  rectangle59?: string;

  /** Style props */
  rectangleIconTop?: CSSProperties["top"];
  textLeft?: CSSProperties["left"];
};

const TextBox: FunctionComponent<TextBoxType> = ({
  text,
  text1,
  rectangleIconTop,
  textLeft,
  rectangle59,
}) => {
  const textBoxStyle: CSSProperties = useMemo(() => {
    return {
      top: rectangleIconTop,
    };
  }, [rectangleIconTop]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      left: textLeft,
    };
  }, [textLeft]);

  return (
    <div className={styles.textbox} style={textBoxStyle}>
      <img className={styles.textboxChild} alt="" src={rectangle59} />
      <div className={styles.text} style={textStyle}>
        {text}
      </div>
      <b className={styles.text1}>{text1}</b>
    </div>
  );
};

export default TextBox;
