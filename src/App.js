import React, { useState } from "react";
import "./App.css";
const Home = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([
    "자바스크립트공부",
    "리액트공부",
    "블로그포스팅",
  ]);

  const handleClickAdd = () => {
    const newTodoList = [...todoList, text];
    setTodoList(newTodoList);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div className="form">
        <input type="text" onChange={handleChangeText} />
        <button type="button" onClick={handleClickAdd}>
          추가하기
        </button>
      </div>
      
      <h1>TodoList</h1>
      <ul>
        {todoList.map(function (item) {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;