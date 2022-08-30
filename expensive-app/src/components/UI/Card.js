import React from "react";

import "./Card.css";

const Card = (props) => {
  // props ke ander ak children property bhi milti hai
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
