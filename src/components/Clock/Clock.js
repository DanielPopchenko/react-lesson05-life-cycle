import React, { Component } from "react";
import "./Clock.css";

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  //   ! Чтобы было видно что ты используешь публичное свойство екземпляра класса - объяви его заранее
  intervalId = null;

  componentDidMount() {
    console.log("set interval");
    // ! Повесил ассинхронку ---> ПОЧИСТЬ
    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  }

  // ! Чистим 'память'
  componentWillUnmount() {
    console.log("interval cleared");
    clearInterval(this.intervalId);
  }

  render() {
    return <div className="ClockFace">{this.state.time}</div>;
  }
}
