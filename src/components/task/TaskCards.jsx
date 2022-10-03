import React from "react";
import { useState } from "react";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";
import { v4 as uuid } from "uuid";

export const TaskCards = () => {
  const taskCardId = uuid();
  const [taskCardsList, setTaskCardsList] = useState([
    // taskCardId,
    // `taskCardId-${taskCardId}`,
  ]);

  return (
    <div className="TaskCardsArea">
      {taskCardsList.map((taskCard) => (
        <TaskCard
          key={taskCard.id}
          taskCardsList={taskCardsList}
          setTaskCardsList={setTaskCardsList}
          taskCard={taskCard}
        />
      ))}
      <AddTaskCardButton
        taskCardsList={taskCardsList}
        setTaskCardsList={setTaskCardsList}
      />
    </div>
  );
};
