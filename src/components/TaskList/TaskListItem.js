import React from "react";

export default function TaskListItem({
  text,
  completed,
  onRemoveTask,
  onUpdateTask,
}) {
  return (
    <>
      <li className="TaskList-item">
        <p className="TaskList-text">{text}</p>

        <label>
          <input type="checkbox" checked={completed} onChange={onUpdateTask} />
          Completed
        </label>

        <section className="TaskList-actions">
          <button
            type="button"
            // ! приходит в пропы функция, которую мы просто передаем в onClick
            onClick={onRemoveTask}
            className="TaskList-button"
          >
            Delete
          </button>
        </section>
      </li>
    </>
  );
}
