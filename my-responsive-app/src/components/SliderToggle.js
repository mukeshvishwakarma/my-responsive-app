import React from 'react';
import '../App.css';

const SliderToggle = ({ selectedView, onSelectView }) => {
  const views = ['Bullish', 'Bearish', 'RangeBound', 'Volatile'];

  return (
    <div className='slidertogle'>
      {views.map((view) => (
        <button
          key={view}
          style={{
            padding: '10px 20px',
            margin: '0 5px',
            cursor: 'pointer',
            backgroundColor: selectedView === view ? '#2196F3' : '#FFF',
            border: '1px solid #ddd',
            color: selectedView === view ? '#fff' : '#bfbfbf',
            borderRadius: '10px',
            fontSize: '16px',
          }}
          onClick={() => onSelectView(view)}
        >
          {view}
        </button>
      ))}
    </div>
  );
};

export default SliderToggle;
