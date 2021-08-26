import React from "react";
import { Transition } from "react-transition-group";

import "./Modal.css";

const modal = (props) => {
  return (
    <Transition mountOnEnter unmountOnExit in={props.isOpen} timeout={400}>
      {(state) => {
        const cssClasses = [
          "Modal",
          state === "entering"
            ? "ModalOpen"
            : state === "exiting"
            ? "ModalClosed"
            : null,
        ];

        console.log(cssClasses);
        return (
          <div className={cssClasses.join(" ")}>
            <h1>A Modal</h1>
            <button className='Button' onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
