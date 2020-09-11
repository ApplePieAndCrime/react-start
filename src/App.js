import React, { useState } from "react";
import "./App.scss";
import Context from "./context";
import TodoList from "./Todo/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Покушать", completed: false },
    { id: 2, title: "Кота помыть", completed: false },
    { id: 3, title: "Ириску помыть", completed: true },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    );
  }
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="app">
        <h1 className="title">Some ToDo list example</h1>
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p className="placeholder-text">Задач пока нет...</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
