import { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [completedTodos, setCompletedTodos] = useState([
    {
      text: "Write a book",
      isCompleted: true,
    },
    {
      text: "Wash dishes",
      isCompleted: true,
    },
  ]);
  const [incompletedTodos, setInCompletedTodos] = useState([
    {
      text: "Go to shopping",
      isCompleted: false,
    },
  ]);

  function markTodoAsComplete(text) {
    setInCompletedTodos(incompletedTodos.filter((t) => t.text !== text));
    setCompletedTodos([
      ...completedTodos,
      {...incompletedTodos.find((t) => t.text === text), isCompleted: true},
    ]);
  }
  function deleteTodo(text) {
    setCompletedTodos(completedTodos.filter((t) => t.text !== text));
  }
  function createTodo(text) {
    setInCompletedTodos([...incompletedTodos, { text, isCompleted: false }]);
  }
  return (
    <>
      <TodoList
        completedTodos={completedTodos}
        incompletedTodos={incompletedTodos}
        onCompleteClicked={markTodoAsComplete}
        onDeleteClicked={deleteTodo}
        onCreateClicked={createTodo}
      />
    </>
  );
}

export default App;
