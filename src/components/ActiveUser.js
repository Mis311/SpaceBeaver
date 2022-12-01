import React from "react";
import UserCard from "./UserCard";
import users from "../utils/users";

function createUsers(user) {
  return (
    <UserCard
      key={user.id}
      imgUrl={user.imgUrl}
      username={user.username}
      activity={user.activity}
    />
  );
}

function ActiveUser(){
  return (
    <>
      <div className="nav-container">
        <h3>Logo</h3>
            <nav className="active-users-list">
                <div>ActiveUser</div>
                {users.map(createUsers)}
            </nav>
      </div>
    </>
  );
};

export default ActiveUser;
