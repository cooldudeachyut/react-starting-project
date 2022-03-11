import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  const combinedClassName = styles.button + " " + props.className;
  return (
    <button
      className={combinedClassName}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
