import React from 'react';
import Article from '/./Article';

const ArticleList = ({ articles }) => (
  <div>
    {articles.map((article, index) => (
      <Article key={index} {...article} />
    ))}
  </div>
);

export default ArticleList;
