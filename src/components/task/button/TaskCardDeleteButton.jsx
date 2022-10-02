import React from "react";

export const TaskCardDeleteButton = () => {
  const deleteCardList = () => {};
  return (
    <div>
      <button onClick={deleteCardList} className="taskCardDeleteButton">
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};
