const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js'); // Assuming you have a product model defined in models/product.model.js
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const productRoute = require('./api/product.route.js'); // Assuming you have a product route defined in routes/product.routes.js

//routes
app.use('/api/products', require('./api/product.route.js')); // Assuming you have a product route defined in routes/product.routes.js

app.get('/', (req, res) => {
  res.send('Hello World! from Express API nodemon 3');
}); 


app.get('/api/products', productRoute);




  

mongoose.connect('mongodb+srv://backendcluster0:XnB3Pu6jnG6ee12b@cluster0.fkkvbai.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { 
    console.log('MongoDB connected'); 
    app.listen(3001, () => {
      console.log('Server is running on port 3001');
    });
}).catch((err) => { console.log('MongoDB connection error:', err); })