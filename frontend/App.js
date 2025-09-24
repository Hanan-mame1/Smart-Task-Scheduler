import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks')
      .then(res => setTasks(res.data))
      .catch(() => setTasks([]));
  }, []);

  const addTask = () => {
    axios.post('http://localhost:5000/api/tasks', { title, description, deadline })
      .then(res => setTasks([...tasks, res.data]));
    setTitle(''); setDescription(''); setDeadline('');
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h1>Smart Task Scheduler</h1>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input type="datetime-local" value={deadline} onChange={e => setDeadline(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task.title} - {task.deadline}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
