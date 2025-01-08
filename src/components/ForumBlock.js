
import React from 'react';

const ForumBlock = ({ topic, replies }) => (
  <div className="forum-block">
    <h2>{topic}</h2>
    <p>{replies} replies</p>
  </div>
);

export default ForumBlock;
