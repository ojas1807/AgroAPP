import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './News.css'; // Import the CSS file

const News = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/news'); // Adjust URL as necessary
        setArticles(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchNews();
  }, []);

  if (error) {
    return <p className="error-message">Error fetching news: {error}</p>;
  }

  return (
    <div className="news-container">
      <h1 className="news-title">Latest Agriculture News</h1>
      {articles.length > 0 ? (
        articles.map(article => (
          <div key={article.url} className="article-card">
            {article.urlToImage && (
              <img className="article-image" src={article.urlToImage} alt={article.title} />
            )}
            <h2 className="article-title">{article.title}</h2>
            <p className="article-description">{article.description}</p>
            <a className="read-more" href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))
      ) : (
        <p className="no-articles">No articles available.</p>
      )}
    </div>
  );
};

export default News;
