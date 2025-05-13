const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productRoute);
app.get('/', (req, res) => res.send('Hello World! from Express API'));

// Mongo connection (only called once)
let isConnected = false;
async function connectToDatabase() {
  if (isConnected) return;
  await mongoose.connect(
    'mongodb+srv://backendcluster0:XnB3Pu6jnG6ee12b@cluster0.fkkvbai.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0',

  );
  isConnected = true;
  console.log('MongoDB connected');
}

module.exports = { app, connectToDatabase };