import React from "react";

import "./Backdrop.css";

const backdrop = (props) => {
  const cssClasses = [
    "Backdrop",
    props.isInitial
      ? "BackdropInitial"
      : props.isOpen
      ? "BackdropOpen"
      : "BackdropClosed",
  ];

  return <div className={cssClasses.join(" ")}></div>;
};

export default backdrop;
