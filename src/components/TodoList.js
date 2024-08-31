import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos, allTodos }) => {
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddTodo = () => {
    if (!newTodo.trim()) return;

    const newTask = {
      id: allTodos.length + 1,
      user_id: todos[0]?.user_id || 1,
      task: newTodo,
      done: false,
    };

    setTodos([...allTodos, newTask]);
    setNewTodo('');
  };

  const handleDeleteTodo = (id) => {
    setTodos(allTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTodos(
      allTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.done;
    if (filter === 'incomplete') return !todo.done;
    return true;
  });

  return (
    <div className="todo-list">
      <input
        type="text"
        placeholder="Add new task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>

      <div className="filter-container">
        <label>Filter: </label>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>

      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodo}
            onToggle={handleToggleTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;