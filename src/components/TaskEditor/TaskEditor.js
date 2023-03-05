import React, { Component } from "react";
import "../../tasks.css";
// import "../TaskList/TaskList.css";

export default class TaskEditor extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // !Передаем туда тот стэйт, который имеем на момент сабмита
    this.props.onAddTask(this.state.text);

    // ! Во время сабмита сбрасываем стэйт
    this.setState({ text: "" });
  };

  render() {
    return (
      <form className="TaskEditor" onSubmit={this.handleSubmit}>
        <label>
          Text
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
            className="TaskEditor-input"
          />
        </label>

        <button type="submit">Add task</button>
      </form>
    );
  }
}
