const express = require('express');
const cors = require('cors')
const helmet = require('helmet');
const xss = require('xss-clean');

const PORT = process.env.PORT || 3000

const app = express();
app.use(cors());
app.use(helmet());
app.use(xss());
app.use(express.json());
app.use(express.urlencoded());

// Simulated JSON-based database
let database = {};

// Helper function to generate a random ID
// Refactored code using slice()
const generateId = () => {
  const randomId = Math.random().toString(36);
  return randomId.slice(2, 11);
};

// Health check endpoint
app.get('/healthcheck', (_, res) => {
  res.send('Server is up and running');
});


// GET all users
app.get('/users', (_, res) => {
  res.send(database);
});

// GET user by ID
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = database[userId];
  if (user) {
    res.send(user);
  } else {
    res.status(404).send('User not found');
  }
});

// POST request
app.post('/', (req, res) => {
  const id = generateId();
  const { name } = req.body;
  database[id] = name;
  res.send({ id });
});

// PUT request
app.put('/', (req, res) => {
  const id = generateId();
  const { name } = req.body;
  database = { [id]: name };
  res.send({ id });
});

// DELETE request by ID
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = database[userId];
  if (user) {
    delete database[userId];
  } else {
    res.status(404).send('User not found');
  }
});

// DELETE request
app.delete('/', (_, res) => {
  database = {};
  res.send('Database cleared');
});


// PATCH request
app.patch('/', (req, res) => {
  const { id, name } = req.body;
  if (id in database) {
      database[id] = name;
      res.send('Item updated');
  } else {
      res.send('ID does not exist in the database');
  }
});

// Fallback route
app.use((req, res) => {
  res.status(404).send('Route not found');
});

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});