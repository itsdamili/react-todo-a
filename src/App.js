import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import UserSelector from './components/UserSelector';

const API_URL = 'https://mocki.io/v1/fef04c5f-3164-4597-af56-9315a66251f3';

const App = () => {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
        setTodos(data.todos);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleUserChange = (userId) => {
    setSelectedUser(userId);
  };

  const userTodos = todos.filter((todo) => todo.user_id === selectedUser);

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <UserSelector users={users} onUserChange={handleUserChange} />
      {selectedUser ? (
        <TodoList todos={userTodos} setTodos={setTodos} allTodos={todos} />
      ) : (
        <p>Please select a user to view their todos.</p>
      )}
    </div>
  );
};

export default App;
