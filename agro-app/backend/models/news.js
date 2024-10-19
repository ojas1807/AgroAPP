
const mongoose = require('mongoose');

// Define the News schema
const newsSchema = new mongoose.Schema({
    source: {
        id: { type: String, required: false }, // Optional ID field for the source
        name: { type: String, required: true } // Required name field for the source
    },
    author: { type: String, required: false }, // Optional author field
    title: { type: String, required: true }, // Required title field
    description: { type: String, required: false }, // Optional description field
    url: { type: String, required: true }, // Required URL field
    urlToImage: { type: String, required: false }, // Optional URL for image
    publishedAt: { type: Date, required: true }, // Required publication date
    content: { type: String, required: false } // Optional content field
});

// Create the News model
const News = mongoose.model('News', newsSchema);

module.exports = News;