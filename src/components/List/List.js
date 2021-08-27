import React, { Component } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import { Transition } from "react-transition-group";

import "./List.css";

class List extends Component {
  state = {
    items: [1, 2, 3],
  };

  addItemHandler = () => {
    this.setState((prevState) => {
      return {
        items: prevState.items.concat(prevState.items.length + 1),
      };
    });
  };

  removeItemHandler = (selIndex) => {
    this.setState((prevState) => {
      return {
        items: prevState.items.filter((item, index) => index !== selIndex),
      };
    });
  };

  render() {
    const listItems = this.state.items.map((item, index) => (
      <Transition key={index} timeout={400}>
        {(state) => {
          const cssClasses = [
            "ListItem",
            state === "entering"
              ? "ListItemShown"
              : state === "exiting"
              ? "ListItemHidden"
              : null,
          ];
          return (
            <li
              className={cssClasses.join(" ")}
              onClick={() => this.removeItemHandler(index)}
            >
              {item}
            </li>
          );
        }}
      </Transition>
    ));

    return (
      <div>
        <button className='Button' onClick={this.addItemHandler}>
          Add Item
        </button>
        <p>Click Item to Remove.</p>
        <TransitionGroup className='List' component='ul'>
          {listItems}
        </TransitionGroup>
      </div>
    );
  }
}

export default List;
