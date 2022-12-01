import React from "react";
import UserCard from "./UserCard";
const ActiveUser = () => {
  return (
    <>
      <div className="nav-container">
        <h3>Logo</h3>
        <nav>
          <div>ActiveUser</div>
            <UserCard imgUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fengineering.unl.edu%2Fimages%2Fstaff%2FKayla_Person-small.jpg&f=1&nofb=1&ipt=120c67145312ab1e4225fdc987f321586546390a00d4fdf662d58f03b440b6f2&ipo=images" username="Hanna" activity="React Hooks" />
        </nav>
      </div>
    </>
  );
};

export default ActiveUser;
