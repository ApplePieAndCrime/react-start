import React, { useContext } from "react";
import Context from "./../context";
import "./TodoItem.scss";

export default function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  return (
    <li className={`todo-item ${todo.completed ? "item-done" : ""}`}>
      <span>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        ></input>
        <strong>{index + 1}.</strong>

        <span className="item-title">&nbsp;{todo.title}</span>
      </span>
      <button className="btn-remove" onClick={() => removeTodo(todo.id)}>
        &times;
      </button>
    </li>
  );
}
