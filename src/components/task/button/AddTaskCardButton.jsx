import React from "react";
import { v4 as uuid } from "uuid";

export const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {
  const addTaskCard = () => {
    const taskCardId = uuid();
    setTaskCardsList([
      ...taskCardsList,
      { id: taskCardId, draggableId: `cardId-${taskCardId}` },
    ]);
  };
  return (
    <div className="addTaskCardButtonArea">
      <button onClick={addTaskCard} className="addTaskCardButton">
        <i className="fa-solid fa-plus fa-3x"></i>
      </button>
    </div>
  );
};
