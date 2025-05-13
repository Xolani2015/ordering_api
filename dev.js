const { app, connectToDatabase } = require('./api');
const PORT = 3001;
const productRoute = require('./routes/product.route.js');
app.use('/api/products', productRoute);
connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running locally at http://localhost:${PORT}`);
  });
});