import React from "react";
import { v4 as uuid } from "uuid";

export const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {
  const handleAddTaskCard = () => {
    const taskId = uuid();
    setTaskCardsList([...taskCardsList, { id: taskId }]);
  };
  return (
    <div className="addTaskCardButtonArea">
      <button onClick={handleAddTaskCard} className="addTaskCardButton">
        <i className="fa-solid fa-plus fa-3x"></i>
      </button>
    </div>
  );
};
