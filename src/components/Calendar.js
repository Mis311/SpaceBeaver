import React from "react";
import CalendarBox from "./CalendarBox";
const Calendar = () => {
  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="calendar-header">
          <button className="Book Session">Book Session</button>
          <p className="session-type">25 / 50</p>
          <p className="date">30</p>
          <div className="calendarbox-container">
            <CalendarBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
