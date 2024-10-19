const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Import auth routes
const marketRoutes = require('./routes/market'); // Import market routes
const newsRoutes = require('./routes/newsRoutes'); // Import news routes
const weatherRoutes = require('./routes/weatherRoutes'); // Import weather routes

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Default to port 5000 if not specified

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware to parse JSON requests

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack
  res.status(500).json({ message: 'Something went wrong!' }); // Send error response
});

// MongoDB connection (make sure MONGO_URI is set in .env file)
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.send('AgroAssist Backend API');
});

// Use routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/market', marketRoutes); // Market routes
app.use('/api/news', newsRoutes); // News routes
app.use('/api/weather', weatherRoutes); // Weather routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
