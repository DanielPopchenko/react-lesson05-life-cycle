import React, { Component } from "react";
import Modal from "./components/Modal/Modal";

export default class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    // ! тоглит состояние showModal whed clicked
    this.setState((state) => ({ showModal: !state.showModal }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <button type="button" onClick={this.toggleModal}>
          {showModal ? "Hide" : "Show"} Modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h2>Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              suscipit consequatur dolorum ea porro voluptatum odit et eius
              labore, quisquam ipsum non quod, necessitatibus id dolorem eos
              fuga ullam nisi in similique mollitia veniam quia quaerat
              deleniti. Sed dolores totam eos quidem, rem alias neque
              repudiandae, atque incidunt deserunt exercitationem.
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close Modal
            </button>
          </Modal>
        )}
      </div>
    );
  }
}
