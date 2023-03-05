import React from "react";
import "../../tasks.css";

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <h2>Find a task you need</h2>
      <input
        type="text"
        className="FilterTasks-input"
        value={value}
        // ! В нашу фукнцию будет прокидываться значение с инпута (там его название - filter)
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
}
