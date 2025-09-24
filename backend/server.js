const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let tasks = [];

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const { title, description, deadline } = req.body;
  const task = { title, description, deadline };
  tasks.push(task);
  res.json(task);
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
