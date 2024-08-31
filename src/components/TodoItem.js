import React from 'react';

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <li className={`todo-item ${todo.done ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.task}</span>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>❌</button>
    </li>
  );
};

export default TodoItem;