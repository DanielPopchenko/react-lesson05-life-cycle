import React, { Component } from "react";
import FeedbackList from "./components/LeaveFeedback/FeedbackList";
import Statistics from "./components/LeaveFeedback/Statistics";

export default class Feedbacks extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseValue = (name) => {
    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedbacks = () => {
    return Object.values(this.state).reduce((acc, val) => acc + val, 0);
  };

  countPositiveFeedbacks = () => {
    const total = this.countTotalFeedbacks();
    const good = this.state.good;

    return Math.floor((good * 100) / total) + "%";
  };

  render() {
    const feedbacks = this.state;
    const state = this.state;

    return (
      <section>
        <h1>Homework</h1>
        <FeedbackList
          feedbacks={feedbacks}
          onIncreaseValue={this.increaseValue}
        />
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          totalFeedbacks={this.countTotalFeedbacks()}
          positiveFeedbacks={this.countPositiveFeedbacks()}
        />
      </section>
    );
  }
}
