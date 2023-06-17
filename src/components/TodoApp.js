import React from "react";
import Header from "./Header";
import TodosLogic from "./TodosLogic";
const TodoApp = () => {
  return (
    <React.Fragment>
      <Header />
      <TodosLogic />

    </React.Fragment>
  );
};

export default TodoApp;