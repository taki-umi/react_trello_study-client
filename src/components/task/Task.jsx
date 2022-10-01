import React from "react";

export const Task = ({ task, taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    // taskを受け取りpタグでtask.textを表示
    // ごみ箱マークは「Font Awesome」から使用
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button className="taskTrashButton" onClick={() => handleDelete(task.id)}>
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
};
