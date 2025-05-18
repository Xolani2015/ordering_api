

const Product = require('../models/product.model');


const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
        if (!product) {
        return res.status(404).json({ message: 'Product not found' });
        }
     
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error });
    }
}

const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      quantity,
      price,
      category,
      stock,
      image,
      isDeleted
    } = req.body;

    const product = await Product.create({
      name,
      description,
      quantity,
      price,
      category,
      stock,
      image,
      isDeleted,
      orderState: "new" // <-- set or override the product state here
    });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
};

const updateProduct = async (req, res) => {
  try{ 
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body,);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error });
  }
}

const updateProductState = async (req, res) => {
  try {
    const { id } = req.params;
    const { orderState } = req.body;

    if (!orderState) {
      return res.status(400).json({ message: 'productState is required' });
    }

    const product = await Product.findByIdAndUpdate(
      id,
      { orderState },
      { new: true } // returns the updated document
    );

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error });
  }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
}



module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    updateProductState,
    deleteProduct,
    // Add other controller functions here
    
 } 