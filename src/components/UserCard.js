import React from "react";

const UserCard = ({ imgUrl, username, activity }) => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="user-image-container">
            <img src={imgUrl} alt="user" className="user-icon" />
          </div>
            <p className="user-activity">
            {username} started {activity} session
            </p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
