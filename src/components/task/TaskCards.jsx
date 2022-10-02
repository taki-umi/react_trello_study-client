import React from "react";
import { useState } from "react";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";
import { v4 as uuid } from "uuid";

export const TaskCards = () => {
  const taskId = uuid();
  const [taskCardsList, setTaskCardsList] = useState([taskId]);

  return (
    <div className="TaskCardsArea">
      {taskCardsList.map((taskCard, index) => (
        <div key={taskCard.id}>
          <TaskCard taskCard={taskCard} index={index} />
        </div>
      ))}
      <AddTaskCardButton
        taskCardsList={taskCardsList}
        setTaskCardsList={setTaskCardsList}
      />
    </div>
  );
};
