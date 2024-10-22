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
  { crop: 'Cheat', region: 'North', previousPrice: 1500, currentPrice: 1700, futurePriceEstimate: 1800 },
  { crop: 'Rice', region: 'South', previousPrice: 1200, currentPrice: 1400, futurePriceEstimate: 1600 },
  { crop: 'Maize', region: 'West', previousPrice: 800, currentPrice: 900, futurePriceEstimate: 950 },
  { crop: 'Wheat', region: 'East', previousPrice: 900, currentPrice: 1000, futurePriceEstimate: 1100 },
  { crop: 'Barley', region: 'North', previousPrice: 700, currentPrice: 750, futurePriceEstimate: 800 },
  { crop: 'Soybean', region: 'South', previousPrice: 1800, currentPrice: 2000, futurePriceEstimate: 2200 },
  { crop: 'Sorghum', region: 'West', previousPrice: 600, currentPrice: 650, futurePriceEstimate: 700 },
  { crop: 'Millet', region: 'East', previousPrice: 500, currentPrice: 550, futurePriceEstimate: 600 },
  { crop: 'Cassava', region: 'North', previousPrice: 300, currentPrice: 350, futurePriceEstimate: 400 },
  { crop: 'Yam', region: 'South', previousPrice: 1300, currentPrice: 1400, futurePriceEstimate: 1450 },
  { crop: 'Potato', region: 'West', previousPrice: 1000, currentPrice: 1050, futurePriceEstimate: 1100 },
  { crop: 'Tomato', region: 'East', previousPrice: 700, currentPrice: 750, futurePriceEstimate: 800 },
  { crop: 'Onion', region: 'North', previousPrice: 400, currentPrice: 450, futurePriceEstimate: 500 },
  { crop: 'Pepper', region: 'South', previousPrice: 900, currentPrice: 950, futurePriceEstimate: 1000 },
  { crop: 'Cabbage', region: 'West', previousPrice: 500, currentPrice: 550, futurePriceEstimate: 600 },
  { crop: 'Carrot', region: 'East', previousPrice: 600, currentPrice: 700, futurePriceEstimate: 800 },
  { crop: 'Garlic', region: 'North', previousPrice: 1000, currentPrice: 1100, futurePriceEstimate: 1200 },
  { crop: 'Ginger', region: 'South', previousPrice: 800, currentPrice: 900, futurePriceEstimate: 950 },
  { crop: 'Spinach', region: 'West', previousPrice: 500, currentPrice: 550, futurePriceEstimate: 600 },
  { crop: 'Lettuce', region: 'East', previousPrice: 400, currentPrice: 450, futurePriceEstimate: 500 },
  { crop: 'Cucumber', region: 'North', previousPrice: 700, currentPrice: 800, futurePriceEstimate: 850 },
  { crop: 'Pumpkin', region: 'South', previousPrice: 600, currentPrice: 650, futurePriceEstimate: 700 },
  { crop: 'Sweet Potato', region: 'West', previousPrice: 900, currentPrice: 950, futurePriceEstimate: 1000 },
  { crop: 'Peanut', region: 'East', previousPrice: 1100, currentPrice: 1200, futurePriceEstimate: 1300 },
  { crop: 'Banana', region: 'North', previousPrice: 1500, currentPrice: 1600, futurePriceEstimate: 1650 },
  { crop: 'Apple', region: 'South', previousPrice: 1300, currentPrice: 1400, futurePriceEstimate: 1450 },
  { crop: 'Orange', region: 'West', previousPrice: 1200, currentPrice: 1300, futurePriceEstimate: 1350 },
  { crop: 'Grapes', region: 'East', previousPrice: 1000, currentPrice: 1100, futurePriceEstimate: 1200 },
  { crop: 'Mango', region: 'North', previousPrice: 1700, currentPrice: 1800, futurePriceEstimate: 1850 },
  { crop: 'Pineapple', region: 'South', previousPrice: 1400, currentPrice: 1500, futurePriceEstimate: 1600 },
  { crop: 'Papaya', region: 'West', previousPrice: 1200, currentPrice: 1300, futurePriceEstimate: 1400 },
  { crop: 'Guava', region: 'East', previousPrice: 1100, currentPrice: 1200, futurePriceEstimate: 1250 },
  { crop: 'Coconut', region: 'North', previousPrice: 800, currentPrice: 850, futurePriceEstimate: 900 },
  { crop: 'Watermelon', region: 'South', previousPrice: 700, currentPrice: 750, futurePriceEstimate: 800 },
  { crop: 'Strawberry', region: 'West', previousPrice: 1800, currentPrice: 1900, futurePriceEstimate: 2000 },
  { crop: 'Blueberry', region: 'East', previousPrice: 1600, currentPrice: 1700, futurePriceEstimate: 1750 },
  { crop: 'Pear', region: 'North', previousPrice: 1200, currentPrice: 1300, futurePriceEstimate: 1350 },
  { crop: 'Peach', region: 'South', previousPrice: 1400, currentPrice: 1500, futurePriceEstimate: 1600 },
  { crop: 'Plum', region: 'West', previousPrice: 1000, currentPrice: 1100, futurePriceEstimate: 1150 },
  { crop: 'Apricot', region: 'East', previousPrice: 900, currentPrice: 1000, futurePriceEstimate: 1100 },
  { crop: 'Cherry', region: 'North', previousPrice: 2000, currentPrice: 2200, futurePriceEstimate: 2300 },
  { crop: 'Pomegranate', region: 'South', previousPrice: 1300, currentPrice: 1400, futurePriceEstimate: 1500 },
  { crop: 'Avocado', region: 'West', previousPrice: 1500, currentPrice: 1600, futurePriceEstimate: 1700 },
  { crop: 'Kiwi', region: 'East', previousPrice: 1200, currentPrice: 1300, futurePriceEstimate: 1350 },
  { crop: 'Lime', region: 'North', previousPrice: 600, currentPrice: 650, futurePriceEstimate: 700 },
  { crop: 'Lemon', region: 'South', previousPrice: 700, currentPrice: 750, futurePriceEstimate: 800 },
  { crop: 'Tangerine', region: 'West', previousPrice: 800, currentPrice: 850, futurePriceEstimate: 900 },
  { crop: 'Cocoa', region: 'East', previousPrice: 500, currentPrice: 550, futurePriceEstimate: 600 },
  { crop: 'Coffee', region: 'North', previousPrice: 1000, currentPrice: 1100, futurePriceEstimate: 1200 },
  { crop: 'Tea', region: 'South', previousPrice: 800, currentPrice: 850, futurePriceEstimate: 900 },
  { crop: 'Sugarcane', region: 'West', previousPrice: 600, currentPrice: 650, futurePriceEstimate: 700 },
  { crop: 'Cotton', region: 'East', previousPrice: 500, currentPrice: 550, futurePriceEstimate: 600 },
  { crop: 'Jute', region: 'North', previousPrice: 900, currentPrice: 1000, futurePriceEstimate: 1050 },
  { crop: 'Rubber', region: 'South', previousPrice: 1200, currentPrice: 1300, futurePriceEstimate: 1400 },
  { crop: 'Tobacco', region: 'West', previousPrice: 1400, currentPrice: 1500, futurePriceEstimate: 1600 },
  { crop: 'Hemp', region: 'East', previousPrice: 1100, currentPrice: 1200, futurePriceEstimate: 1300 },
  { crop: 'Flax', region: 'North', previousPrice: 800, currentPrice: 850, futurePriceEstimate: 900 },
  { crop: 'Bamboo', region: 'South', previousPrice: 1000, currentPrice: 1100, futurePriceEstimate: 1200 },
  { crop: 'Palm', region: 'West', previousPrice: 1500, currentPrice: 1600, futurePriceEstimate: 1700 },
  { crop: 'Sunflower', region: 'East', previousPrice: 900, currentPrice: 1000, futurePriceEstimate: 1050 },
  { crop: 'Sesame', region: 'North', previousPrice: 600, currentPrice: 650, futurePriceEstimate: 700 },
  { crop: 'Almond', region: 'South', previousPrice: 1800, currentPrice: 1900, futurePriceEstimate: 2000 },
  { crop: 'Walnut', region: 'West', previousPrice: 1600, currentPrice: 1700, futurePriceEstimate: 1800 },
  { crop: 'Cashew', region: 'East', previousPrice: 1500, currentPrice: 1600, futurePriceEstimate: 1650 },
  { crop: 'Pistachio', region: 'North', previousPrice: 2000, currentPrice: 2200, futurePriceEstimate: 2300 },
  { crop: 'Hazelnut', region: 'South', previousPrice: 1400, currentPrice: 1500, futurePriceEstimate: 1600 },
  { crop: 'Chestnut', region: 'West', previousPrice: 900, currentPrice: 1000, futurePriceEstimate: 1100 },
  { crop: 'Macadamia', region: 'East', previousPrice: 1100, currentPrice: 1200, futurePriceEstimate: 1250 },
  { crop: 'Olive', region: 'North', previousPrice: 1300, currentPrice: 1400, futurePriceEstimate: 1500 },
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