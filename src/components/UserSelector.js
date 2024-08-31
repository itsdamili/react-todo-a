import React from 'react';

const UserSelector = ({ users, onUserChange }) => {
  return (
    <div>
      <label>Select User: </label>
      <select onChange={(e) => onUserChange(parseInt(e.target.value, 10))}>
        <option value="">--Select User--</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.firstname}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelector;
