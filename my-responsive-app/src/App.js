import React, { useState } from 'react';
import SliderToggle from './components/SliderToggle';
import DateDropdown from './components/DateDropdown';
import StrategyCards from './components/StrategyCards';
import EmptyState from './components/EmptyState';
import { dateArray, strategyArray } from './data';
import './App.css';

const App = () => {
  const [selectedView, setSelectedView] = useState('Bullish');
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);

  const strategies = strategyArray.find((item) => item.View === selectedView)?.Value[selectedDate] || [];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Strategy Viewer</h1>
      <SliderToggle selectedView={selectedView} onSelectView={setSelectedView} />
      <DateDropdown dates={dateArray} selectedDate={selectedDate} onDateChange={setSelectedDate} />
      {strategies.length > 0 ? (
        <StrategyCards strategies={strategies} />
      ) : (
        <EmptyState date={selectedDate} />
      )}
    </div>
  );
};

export default App;
