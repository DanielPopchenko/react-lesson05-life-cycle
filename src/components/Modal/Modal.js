import React, { Component } from "react";
import "./Modal.css";

export default class Modal extends Component {
  componentDidMount() {
    // ! Букдет вызываться после каждого открытия модалки
    console.log("Modal componentDidMount");

    window.addEventListener("keydown", this.handleKeyDown);
    // событие keypress не отслеживает классические клавиши
    // событие keydown отслеживает все клавиши
  }

  componentWillUnmount() {
    console.log("Modal componentWillUnmount");

    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      console.log("Закрываем модалку");

      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="ModalOverlay">
        {/* 
            Делаем this.props.children для переиспользуемости компонента
            оформление одно и тоже, меняется только контент
        */}
        <div className="Modal">{this.props.children}</div>
      </div>
    );
  }
}
