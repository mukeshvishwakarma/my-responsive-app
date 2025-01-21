import React, { useState } from 'react';
import '../App.css';

const DateDropdown = ({ dates, selectedDate, onDateChange }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleDropdownClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={`dropdown ${isClicked ? 'dropdown-expanded' : ''}`}>
      <select
        value={selectedDate}
        onChange={(e) => onDateChange(e.target.value)}
        onClick={handleDropdownClick}
        className='date-dropdown'
      >
        {dates.map((date) => (
          <option key={date} value={date} className='date-select'>
            {date}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateDropdown;
