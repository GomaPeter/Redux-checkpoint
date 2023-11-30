// AddTask.js
import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onAddTask(newTask.trim());
      setNewTask('');
    }
  };

  return (
    <div className= "add-task-container">
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
