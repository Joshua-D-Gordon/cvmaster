// src/CareerInsights/CareerInsights.js
import React, { useState } from 'react';
import './styles.css';
import Sidebar from '../Sidebar/Sidebar';

const CareerInsights = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [jobTitles, setJobTitles] = useState(['Software Engineer', 'Data Scientist']);
  const [savedJobTitles, setSavedJobTitles] = useState([]);
  const [selectedJobTitle, setSelectedJobTitle] = useState(null);
  const [trendingTopics, setTrendingTopics] = useState([]);
  const [articles, setArticles] = useState([]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleJobTitleClick = (jobTitle) => {
    if (!savedJobTitles.includes(jobTitle)) {
      setSavedJobTitles([...savedJobTitles, jobTitle]);
    }
  };

  const handleSavedJobTitleClick = (jobTitle) => {
    setSelectedJobTitle(jobTitle);
    fetchTrendingTopics(jobTitle);
    fetchArticles(jobTitle);
  };

  const fetchTrendingTopics = (jobTitle) => {
    // Mock data for trending topics
    setTrendingTopics([
      `${jobTitle} Trends in 2024`,
      `Top Skills for ${jobTitle}`,
      `How to become a ${jobTitle}`
    ]);
  };

  const fetchArticles = (jobTitle) => {
    // Mock data for articles
    setArticles([
      { title: `Understanding the ${jobTitle} Role`, link: '#' },
      { title: `A Day in the Life of a ${jobTitle}`, link: '#' },
      { title: `Career Path for ${jobTitle}`, link: '#' }
    ]);
  };

  return (
    <div>
      <Sidebar />
      <div className="content">
        <h2>Career Insights</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search job titles..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <div className="search-results">
            {jobTitles.filter(title => title.toLowerCase().includes(searchQuery.toLowerCase())).map((title, index) => (
              <div key={index} className="search-result-item" onClick={() => handleJobTitleClick(title)}>
                {title}
              </div>
            ))}
          </div>
        </div>
        <div className="saved-job-titles">
          {savedJobTitles.map((title, index) => (
            <div key={index} className="saved-job-title" onClick={() => handleSavedJobTitleClick(title)}>
              {title}
            </div>
          ))}
        </div>
        {selectedJobTitle && (
          <div className="insights">
            <h3>Trending Topics for {selectedJobTitle}</h3>
            <ul>
              {trendingTopics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
            <h3>Articles about {selectedJobTitle}</h3>
            <ul>
              {articles.map((article, index) => (
                <li key={index}><a href={article.link}>{article.title}</a></li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerInsights;
