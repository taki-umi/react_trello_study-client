import React from "react";

export const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const deleteCardList = (id) => {
    // 削除するタスクカードidを特定してリストに詰め直す
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button
        onClick={() => deleteCardList(taskCard.id)}
        className="taskCardDeleteButton"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};
