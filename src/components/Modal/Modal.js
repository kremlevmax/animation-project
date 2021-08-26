import React, { useState } from "react";

import "./Modal.css";

const modal = (props) => {
  const cssClasses = [
    "Modal",
    props.isInitial
      ? "ModalInitial"
      : props.isOpen
      ? "ModalOpen"
      : "ModalClosed",
  ];
  return (
    <div className={cssClasses.join(" ")}>
      <h1>A Modal</h1>
      <button className='Button' onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
