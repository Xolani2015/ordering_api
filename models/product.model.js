const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [ true, 'Product name is required' ],
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
  },

  quantity: {
    type: Number,
    required: [true, 'Product quantity is required'],
    validate: {
      validator: function(value) {
        return value > -1;
      },
      message: 'Product quantity cannot be negative',
    },
  },
  
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    validate: {
      validator: function(value) {
        return value > 0;
      },
      message: 'Product price must be greater than 0',
    },
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
  },
  orderState: {
    type: String,
    required: [true, 'Product state is required'],
  },
  stock: {          
    type: Number,
    required:[true, 'Product stock is required'],
    validate: {
      validator: function(value) {
        return value >= 0;
      },
      message: 'Product stock cannot be negative',
    },
  },
  image: {
    type: String,
    required: [true, 'Product image is required'],
  },
  isDeleted: {
    type: Boolean,
    default: [false, 'Product is deleted'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },

  deletedAt: {
    type: Date,
  }});

  const Product = mongoose.model('Product', productSchema);
  module.exports = Product;