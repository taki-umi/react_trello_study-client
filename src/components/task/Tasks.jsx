import React from "react";
import { Task } from "./Task";

export const Tasks = ({ taskList, setTaskList }) => {
  // Taskコンポーネントにpropsでmapのtaskを渡す
  return (
    <div>
      {taskList.map((task) => (
        <div>
          <Task task={task} taskList={taskList} setTaskList={setTaskList} />
        </div>
      ))}
    </div>
  );
};
