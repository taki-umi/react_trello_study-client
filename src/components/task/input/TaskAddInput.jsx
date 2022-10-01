import React from "react";

export const TaskAddInput = ({
  inputText,
  setInputText,
  setTaskList,
  taskList,
}) => {
  // フォーム押下時に呼び出されるメソッド
  const handleSubmit = (e) => {
    e.preventDefault();

    // フォームのテキストが空白であれば処理終了
    if (inputText === "") return;

    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
      },
    ]);
    // フォーム押下時に、入力フォームを空にする
    setInputText("");
  };

  // 入力フォームの内容が変わったときに呼び出されるメソッド
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="TaskAddInput"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};
