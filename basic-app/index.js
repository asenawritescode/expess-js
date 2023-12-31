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

const generateId = () => {
  const randomId = Math.random().toString(36);
  return randomId.slice(2, 11);
};

app.get('/', (_, res) => {
  res.send('Hello World!')
});

// Health check endpoint
app.get('/healthcheck', (_, res) => {
  res.send('Server is up and running');
});


// GET all users
app.get('/users/all', (_, res) => {
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
app.post('/users/new', (req, res) => {
  const id = generateId();
  const { name, email, age } = req.body;
  database[id] = {
    name: name,
    email: email,
    age: age
  };
  res.send({ id });
});

// PUT request
/**
 * This updates the entire resource with the new data, all the data has to be present
 */
app.put('/users/:id', (req, res) => {
  const { name, email, age } = req?.body;
  // check if they all exist
  if (!name || !email || !age) {
    res.status(400).send('Missing data');
    return
  }
  
  const id = req.params.id;
  
  database[id] = {
    name: name,
    email: email,
    age: age
  };
  res.send("User updated");
});

// DELETE request by ID
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = database[userId];
  if (user) {
    delete database[userId];
    res.send('User deleted !');
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
/**
 * This updates a particular resource, with the specified data
 */
app.patch('/users/:id', (req, res) => {
  const id = req.params.id;
  const { name, age, email } = req?.body;
  if (id in database) {
    if (name) {
      database[id].name = name;
    }
    if (email) {
      database[id].email = email;
    }
    if (age) {
      database[id].age = age;
    } 
    res.send('Item updated');
  } else {
    res.send('ID does not exist in the database');
  }
});

// Fallback route
app.use((_, res) => {
  res.status(404).send('Route not found');
});

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});