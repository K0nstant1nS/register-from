import React from "react";
import styles from "./split-line.module.css";

function SplitLine({ mt, mb }) {
  return (
    <div style={{ margin: `${mt} 0 ${mb}` }} className={styles.line}></div>
  );
}

export default SplitLine;
