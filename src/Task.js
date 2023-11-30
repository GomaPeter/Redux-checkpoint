// Task.js
import React from 'react';

const Task = ({ task, onToggle, onDelete, onEdit }) => {
  return (
    <div className={`task ${task.isDone ? 'done' : ''}`}>
      <span>{task.description}</span>
      <div>
        <button onClick={() => onToggle(task.id)}>
          {task.isDone ? 'Undo' : 'Done'}
        </button>
        <button onClick={() => onEdit(task.id)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
