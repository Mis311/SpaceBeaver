import React from "react";

const CalendarBox = (props) => {
  return (
    <div className="calendar-box-container">
      <div className="calendar-box">
        <div className="calendar-box-header">
            <button className="select-box"></button>
            <img src={props.imgUrl} alt="user" className="user-icon" />
            <p className="user-username">{props.username}</p>
            <button className="select-box"></button>
        </div>
      </div>
    </div>
  );
};

export default CalendarBox;
