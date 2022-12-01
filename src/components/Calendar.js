import React from "react";
import CalendarBox from "./CalendarBox";
import calendarUsers from "../utils/calendarUsers";

function createUser(calendarUser){
    return (
        <CalendarBox 
            key={calendarUser.id}
            imgUrl={calendarUser.imgUrl}
            username={calendarUser.username}
        />
    )
}

const Calendar = () => {
  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="calendar-header">
          <button className="Book Session">Book Session</button>
          <p className="session-type">25 / 50</p>
          <p className="date">30</p>
          <div className="calendarbox-container">
            {calendarUsers.map(createUser)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
