import React, { useState } from "react";
import styles from "./input.module.css";

function Input({
  name,
  type,
  reg,
  errorMessage,
  emptyMessage,
  onChange,
  value,
  validation,
}) {
  /*const onBlur = ({ target }) => {
    const matches = target.value.match(reg);
    console.log(matches);
    if (matches && matches[0] === target.value && matches.length === 1) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };*/

  const error = value ? errorMessage : emptyMessage;

  return (
    <div className={styles.container}>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className={styles.input}
        type={type}
        pattern={reg}
        required
      />
      {validation && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default Input;
