import React from "react";
import styles from "./select.module.css";

function Select({ options, name, onChange, value }) {
  const optionsElements = options.map(({ city }) => {
    return (
      <option key={city} value={city}>
        {city}
      </option>
    );
  });
  return (
    <select
      onChange={onChange}
      value={value}
      name={name}
      className={styles.input}
    >
      {optionsElements}
    </select>
  );
}

export default Select;
