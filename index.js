const { app, connectToDatabase } = require('./api');

module.exports = async (req, res) => {
  await connectToDatabase();
  return app(req, res); // Treat app as handler for Vercel
};