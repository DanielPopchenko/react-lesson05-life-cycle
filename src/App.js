import React, { Component } from "react";
// import Modal from "./components/Modal/Modal";
import Clock from "./components/Clock/Clock";
import Tabs from "./components/Tabs/Tabs";
import tabs from "./components/tabs.json";

export default class App extends Component {
  state = {
    showClock: true,
  };

  toggleClock = () => {
    // ! тоглит состояние showModal whed clicked
    this.setState((state) => ({ showClock: !state.showClock }));
  };

  render() {
    const { showClock } = this.state;

    return (
      <div>
        {/* <button type="button" onClick={this.toggleModal}>
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
          </Modal> */}
        {/* )} */}

        {/* <div>
          <button type="button" onClick={this.toggleClock}>
            {showClock ? "Hide" : "Show"} Modal
          </button>
          {showClock && <Clock></Clock>}
        </div> */}

        <div>
          <Tabs items={tabs} />
        </div>
      </div>
    );
  }
}
