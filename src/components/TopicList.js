import React from 'react';
import Topic from './Topic';

const TopicList = ({ topics }) => (
  <div>
    {topics.map((topic, index) => (
      <Topic key={index} {...topic} />
    ))}
  </div>
);

export default TopicList;
