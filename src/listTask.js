// ListTask.js
import React from 'react';
import Task from './Task';

const ListTask = ({ tasks, filter, onToggle, onDelete, onEdit }) => {
  const filteredTasks = filter === 'all' ? tasks : tasks.filter(task => task.isDone === (filter === 'done'));

  return (
    <div>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default ListTask;
