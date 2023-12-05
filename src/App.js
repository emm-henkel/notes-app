import React from 'react';
import TopicList from './components/TopicList';
import articlesData from './data/articles.json';

function App() {
  return (
    <div className="App">
      <h1>My Article App</h1>
      <TopicList topics={articlesData.topics} />
    </div>
  );
}

export default App;
