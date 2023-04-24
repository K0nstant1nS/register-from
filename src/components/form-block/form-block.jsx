import React from "react";
import styles from "./form-block.module.css";
import Input from "../input/input";
import Select from "../select/select";
import CheckboxBlock from "../checkbox-block/checkbox-block";
import Button from "../button/button";

function FormBlock({ settings, validation }) {
  const elements = settings.map(
    ({ name, input, description, select, checkbox, button }) => {
      return (
        <div className={styles.gridBlock}>
          <span className={styles.name}>{name}</span>
          {input && <Input {...input} validation={validation} />}
          {select && <Select {...select} />}
          {checkbox && <CheckboxBlock {...checkbox} />}
          {button && <Button {...button} />}
          <p className={styles.description}>{description}</p>
        </div>
      );
    }
  );

  return <div className={styles.container}>{elements}</div>;
}

export default FormBlock;
