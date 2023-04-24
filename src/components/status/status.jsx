import React from "react";
import styles from "./status.module.css";

function Status() {
  const status = window.localStorage.getItem("status");
  return (
    <div className={styles.container}>
      <div className={styles.rectangle}></div>
      <div className={styles.content}>
        <p className={styles.status}>
          {status ? status : "Здесь пока пусто =)"}
        </p>
      </div>
    </div>
  );
}

export default Status;
