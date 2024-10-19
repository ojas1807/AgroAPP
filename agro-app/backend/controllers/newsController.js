
// controllers/newsController.js

const axios = require('axios');
const News = require('../models/news'); // Import the News model

const getAgricultureNews = async (req, res) => {
  try {
    const apiKey = process.env.NEWS_API_KEY; // Store your API key in .env
    const url = `https://newsapi.org/v2/everything?q=agriculture&apiKey=${apiKey}`;
    
    const response = await axios.get(url);
    const articles = response.data.articles; // Extract articles from the response

    // Save articles to the database
    await News.insertMany(
      articles.map(article => ({
        source: article.source,
        author: article.author,
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage,
        publishedAt: new Date(article.publishedAt), // Convert to Date object
        content: article.content
      })),
      { ordered: false } // Allows insertion of non-duplicate entries
    );

    res.json(articles); // Send news articles to the client
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: 'Failed to fetch and save news data' });
  }
};

module.exports = { getAgricultureNews };
