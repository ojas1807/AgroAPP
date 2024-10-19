
// // controllers/marketController.js
// const Market = require('../models/Market');

// // Fetch market trends (previous price, current price, future estimate)
// exports.getMarketTrends = async (req, res) => {
//   try {
//     const { region, crop } = req.query;

//     // Build query based on provided filters (e.g., region, crop)
//     let query = {};
//     if (region) query.region = region;
//     if (crop) query.crop = crop;

//     // Find market data matching the query
//     const marketData = await Market.find(query).sort({ createdAt: -1 });

//     res.json(marketData);
//   } catch (err) {
//     res.status(500).json({ error: 'Error fetching market trends' });
//   }
// };const Market = require('../models/Market');
const Market = require('../models/Market');

// Fetch all market data
exports.getMarketData = async (req, res) => {
  try {
    const marketData = await Market.find(); // Fetch all market data
    res.json(marketData);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching market data' });
  }
};

// Fetch market trends (previous price, current price, future estimate)
exports.getMarketTrends = async (req, res) => {
  const { region, crop } = req.query; // Destructure region and crop from query parameters

  // Build query based on provided filters (e.g., region, crop)
  let query = {};
  if (region) query.region = region;
  if (crop) query.crop = crop;

  try {
    // Find market data matching the query and sort by created date
    const marketData = await Market.find(query).sort({ createdAt: -1 });
    res.json(marketData);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching market trends' });
  }
};

