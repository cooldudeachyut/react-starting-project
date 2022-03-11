import React from "react";

import styles from "./Card.module.css";

const Card = (props) => {
  const combinedClassName = styles.card + " " + props.className;
  return <div className={combinedClassName}>{props.children}</div>;
};

export default Card;
