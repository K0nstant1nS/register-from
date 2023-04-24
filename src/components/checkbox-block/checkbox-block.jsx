import React from "react";
import styles from "./checkbox-block.module.css";

function CheckboxBlock({ description, name, onChange, value }) {
  return (
    <div className={styles.content}>
      <input onChange={onChange} name={name} type="checkbox" checked={value} />
      <p>{description}</p>
    </div>
  );
}

export default CheckboxBlock;
