import React from 'react';

const Topic = ({ name, articles }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      {articles.map((article, index) => (
        <li key={index}>{article.title}</li>
      ))}
    </ul>
  </div>
);

export default Topic;
