import React from "react";
import "./tasks.css";

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        // ! Передаем текущее значиние таргета
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
}
