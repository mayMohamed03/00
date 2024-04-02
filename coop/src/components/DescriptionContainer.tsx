import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DescriptionContainer.module.css";

export type DescriptionContainerType = {
  topicPromptText?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propColor?: CSSProperties["color"];
};

const DescriptionContainer: FunctionComponent<DescriptionContainerType> = ({
  topicPromptText,
  propTop,
  propColor,
}) => {
  const descriptionStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.description} style={descriptionStyle}>
      <img className={styles.textareaIcon} alt="" src="/textarea1.svg" />
      <div className={styles.text} style={text1Style}>
        {topicPromptText}
      </div>
      <b className={styles.text1}>Description</b>
    </div>
  );
};

export default DescriptionContainer;
