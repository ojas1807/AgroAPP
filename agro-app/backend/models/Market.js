

// models/Market.js
const mongoose = require('mongoose');

const marketSchema = new mongoose.Schema({
  crop: { type: String, required: true },
  region: { type: String, required: true },
  previousPrice: { type: Number, required: true }, // Previous crop price
  currentPrice: { type: Number, required: true },  // Current crop price
  futurePriceEstimate: { type: Number, required: true }, // Approx future value
}, { timestamps: true });

module.exports = mongoose.model('Market', marketSchema);


