import React from "react";
import "./TodoList.scss";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  return (
    <div className="todo-list">
      <ul>
        {props.todos.map((todo, index) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              index={index}
              onChange={props.onToggle}
            />
          );
        })}
      </ul>
    </div>
  );
}
