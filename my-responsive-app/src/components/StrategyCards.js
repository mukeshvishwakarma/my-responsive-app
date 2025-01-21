import React from 'react';
import '../App.css';

const StrategyCards = ({ strategies }) => {
  const strategyCounts = strategies.reduce((acc, strategy) => {
    acc[strategy] = (acc[strategy] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className='strategy'>
      {Object.entries(strategyCounts).map(([strategy, count]) => (
        <div
          key={strategy}
          className='strategy-cards'
        >
          <h4>{strategy}</h4>
          <p><span style={{ fontSize: '25px', marginRight: '5px' }}>•</span>
           {count} {count > 1 ? 'Strategies' : 'Strategy'}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StrategyCards;
