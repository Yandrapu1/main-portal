import React from 'react';
import ForumBlock from '../components/ForumBlock';

const Forums = () => {
  const forums = [
    { topic: 'How to prepare for placements?', replies: 32 },
    { topic: 'Best resources for competitive exams', replies: 18 },
  ];

  return (
    <div>
      <h1>Forums</h1>
      {forums.map((forum, index) => (
        <ForumBlock key={index} {...forum} />
      ))}
    </div>
  );
};

export default Forums;
