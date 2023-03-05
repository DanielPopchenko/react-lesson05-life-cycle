import React from "react";
// import "./TaskList.css";
import TaskListItem from "./TaskListItem";

const TaskList = ({ tasks, onRemoveTask, onUpdateTask }) => {
  return (
    <ul className="TaskList">
      {tasks.map(({ id, text, completed }) => (
        <TaskListItem
          key={id}
          text={text}
          completed={completed}
          //! Когда надо передать больше чем просто событие,
          //! мы оборачиваем функцию в анонимку
          //! и передаем параметром то что нам надо.
          //! когда происходит onClick вызывается эта функция
          onRemoveTask={() => onRemoveTask(id)}
          onUpdateTask={() => onUpdateTask(id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
