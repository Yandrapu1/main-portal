
import React from 'react';

const ResourceBlock = ({ title, description, link }) => (
  <div className="resource-block">
    <h2>{title}</h2>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">Learn More</a>
  </div>
);

export default ResourceBlock;
console.log('Rendering ResourceBlock component');