// models/Weather.js

const mongoose = require('mongoose');

// Define the Weather schema
const weatherSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true // Required field for the location name
    },
    lat: {
        type: Number,
        required: true // Required latitude
    },
    lon: {
        type: Number,
        required: true // Required longitude
    },
    current: {
        temperature: {
            type: Number,
            required: true // Required current temperature
        },
        humidity: {
            type: Number,
            required: true // Required humidity percentage
        },
        pressure: {
            type: Number,
            required: true // Required atmospheric pressure
        },
        description: {
            type: String,
            required: true // Required weather description (e.g., "clear sky")
        },
        icon: {
            type: String,
            required: true // Required icon URL or code for the weather condition
        },
        windSpeed: {
            type: Number,
            required: true // Required wind speed
        },
    },
    daily: [
        {
            date: {
                type: Date,
                required: true // Required date for the daily forecast
            },
            temperature: {
                min: {
                    type: Number,
                    required: true // Required minimum temperature
                },
                max: {
                    type: Number,
                    required: true // Required maximum temperature
                }
            },
            humidity: {
                type: Number,
                required: true // Required humidity percentage
            },
            pressure: {
                type: Number,
                required: true // Required atmospheric pressure
            },
            description: {
                type: String,
                required: true // Required weather description
            },
            icon: {
                type: String,
                required: true // Required icon URL or code
            }
        }
    ]
});

// Create the Weather model
const Weather = mongoose.model('Weather', weatherSchema);

module.exports = Weather;
