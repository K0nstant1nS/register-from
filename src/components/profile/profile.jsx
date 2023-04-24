import React from "react";
import styles from "./profile.module.css";
import Status from "../status/status";

function Profile({ style }) {
  const name = localStorage.getItem("name");
  return (
    <div style={style} className={styles.content}>
      <p className={styles.nameSet}>
        Здравствуйте,{" "}
        <span className={styles.name}>{name ? name : "Inkognito"}</span>
      </p>
      <span className={styles.changeStatus}>Сменить статус</span>
      <div className={styles.status}>
        <Status />
      </div>
    </div>
  );
}

export default Profile;
