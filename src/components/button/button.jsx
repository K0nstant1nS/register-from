import React from "react";
import styles from "./button.module.css";

function Button({ description, innerText, buttonType }) {
  return (
    <div className={styles.content}>
      <button className={styles.button} type={buttonType}>
        {innerText}
      </button>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default Button;
