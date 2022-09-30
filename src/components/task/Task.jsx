import React from "react";

export const Task = ({ task }) => {
  return (
    // taskを受け取りpタグでtask.textを表示
    // ごみ箱マークは「Font Awesome」から使用
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button>
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
};
