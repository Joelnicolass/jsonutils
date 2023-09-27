import React from "react";
import styles from "./TextArea.module.css";

const TextArea = ({ error, ...props }) => {
  return (
    <div className={styles.input__container}>
      <textarea className={styles.input} {...props} />
    </div>
  );
};

export default TextArea;
