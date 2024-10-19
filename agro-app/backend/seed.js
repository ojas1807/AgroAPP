const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Market = require('./models/Market'); // Adjust the path as needed

// Load environment variables from .env file
dotenv.config();

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1); // Exit the process if connection fails
  }
};

// Sample market data to be seeded
const sampleMarketData = [
  {
    crop: 'Cheat',
    region: 'North',
    previousPrice: 1500,
    currentPrice: 1700,
    futurePriceEstimate: 1800,
  },
  {
    crop: 'Rice',
    region: 'South',
    previousPrice: 1200,
    currentPrice: 1400,
    futurePriceEstimate: 1600,
  },
  {
    crop: 'Maize',
    region: 'West',
    previousPrice: 800,
    currentPrice: 900,
    futurePriceEstimate: 950,
  },
];

// Function to seed data
const seedData = async () => {
  await connectDB(); // Connect to MongoDB

  try {
    await Market.deleteMany(); // Clear existing data from the Market collection
    await Market.insertMany(sampleMarketData); // Insert sample data into the Market collection
    console.log('Sample data seeded successfully'); // Log success message
  } catch (err) {
    console.error('Error seeding data:', err.message); // Log any errors
  } finally {
    mongoose.connection.close(); // Close the database connection
  }
};

// Run the seed function
seedData();