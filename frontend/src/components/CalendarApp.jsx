import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarApp = () => {
  const [date, setDate] = useState(new Date());

  const onDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>My Calendar App</h1>
      <Calendar onChange={onDateChange} value={date} />
      <p>
        Selected Date: <strong>{date.toDateString()}</strong>
      </p>
    </div>
  );
};

export default CalendarApp;
