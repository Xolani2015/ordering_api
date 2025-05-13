const express = require('express');
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js'); // Assuming you have a product controller defined in controllers/product.controller.js

router.get('/getall/', getProducts); // Get all products
router.get('/get/:id', getProduct); // Get product by IDp);
router.post('/create/', createProduct); // Create a new product
router.put('/update/:id', updateProduct); // Update a product by ID
router.delete('/delete/:id', deleteProduct); // Delete a product by ID

module.exports = router;

