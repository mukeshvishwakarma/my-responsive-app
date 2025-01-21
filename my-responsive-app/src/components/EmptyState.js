import React from 'react';
import '../App.css';

const EmptyState = ({ date }) => {
  return (
    <div className='emptystate'>
      <p>No strategies available for</p>
      <article>{date}.</article>
    </div>
  );
};

export default EmptyState;
