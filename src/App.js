// App.js
import React, { useState } from 'react';
import AddTask from './AddTask';
import ListTask from './listTask';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Task 1', isDone: false },
    { id: 2, description: 'Task 2', isDone: true },
    // ... add more tasks as needed
  ]);

  const [filter, setFilter] = useState('all');
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleAddTask = description => {
    const newTask = {
      id: tasks.length + 1,
      description,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = taskId => {
    setTasks(tasks.map(task => (task.id === taskId ? { ...task, isDone: !task.isDone } : task)));
  };

  const handleDeleteTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleEditTask = taskId => {
    setEditingTaskId(taskId);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask onAddTask={handleAddTask} />
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('notDone')}>Not Done</button>
      </div>
      <ListTask
        tasks={tasks}
        filter={filter}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
        onEdit={handleEditTask}
      />
    </div>
  );
};

export default App;
