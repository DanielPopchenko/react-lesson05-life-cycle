import React, { Component } from "react";

export default class Tabs extends Component {
  state = {
    activeIdx: 0,
  };

  setActiveTabIdx = (idx) => {
    this.setState({
      activeIdx: idx,
    });
  };

  render() {
    console.log(`Render @now ${Date.now()}`);

    const tab = this.props.items[this.state.activeIdx];

    return (
      <div>
        {/* idx в map - индекс операции */}
        {this.props.items.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => this.setActiveTabIdx(idx)}
          >
            {item.id}
          </button>
        ))}

        <div>
          <h2>{tab.label}</h2>
          <p>{tab.text}</p>
        </div>
      </div>
    );
  }
}
