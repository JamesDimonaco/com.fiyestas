import React from 'react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>fiYEStas.com</strong>
      <p>Join our discord here<a target="_blank" rel="noopener noreferrer" href="https://yestheoryfam.com">yestheoryfam</a></p>
    </div>
  );
};

export default ExploreContainer;
