import React from 'react';
import ResourceBlock from '../components/ResourceBlock';

const Resources = () => {
  const resources = [
    { title: 'Coding Tutorials', description: 'Learn to code with interactive tutorials.', link: 'https://www.freecodecamp.org/' },
    { title: 'Soft Skills', description: 'Develop essential soft skills.', link: 'https://www.coursera.org/' },
  ];

  return (
    <div>
      <h1>Resources</h1>
      {resources.map((res, index) => (
        <ResourceBlock key={index} {...res} />
      ))}
    </div>
  );
};

export default Resources;
