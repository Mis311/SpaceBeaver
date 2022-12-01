import React from "react";

function UserCard(props) {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="user-image-container">
            <img src={props.imgUrl} alt="user" className="user-icon" />
          </div>
            <p className="user-activity">
            {props.username} started {props.activity} session
            </p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
