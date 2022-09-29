import React from "react";

export const TaskAddInput = ({
  inputText,
  setInputText,
  setTaskList,
  taskList,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setTaskList([...taskList, { text: inputText }]);
    console.log(...taskList);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="TaskAddInput"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
