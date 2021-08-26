import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    isOpen: false,
    isInitial: true,
  };

  showModal = () => {
    this.setState({ isOpen: true, isInitial: false });
  };

  closeModal = () => {
    this.setState({ isOpen: false, isInitial: false });
  };

  render() {
    return (
      <div className='App'>
        <h1>React Animations</h1>
        <Modal
          closed={this.closeModal}
          isInitial={this.state.isInitial}
          isOpen={this.state.isOpen}
        />
        <Backdrop isOpen={this.state.isOpen} isInitial={this.state.isInitial} />
        <button className='Button' onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
