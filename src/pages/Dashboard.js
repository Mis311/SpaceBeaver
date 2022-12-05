// React
import React from "react";

// RMIM
import { MouseContainer, ChasingElement } from "react-mouse-image-move";

// MUI
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailIcon from "@mui/icons-material/Email";
import Avatar from "@mui/material/Avatar";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";

// Custom
import "./dashboard.css";

const userMessage = [
  {
    title: "Looking For Help",
    message: "Hey sorry to bother you, but I'm having trouble with",
  },
  {
    title: "Review Branch",
    message: "Somone posted a new branch, can you check it out?",
  },
  {
    title: "Session Request",
    message: "Sup, can you help me with my session?",
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <Leftboard />
        <Middleboard />
        <Rightboard />
      </div>
    </div>
  );
}

// var style = {
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   bgcolor: "primary.main",
//   color: "primary.contrastText",
//   padding: "2rem",
//   margin: "1.2rem",
//   width: "12rem",
//   height: "3rem",
//   border: "1px solid black",
//   borderRadius: "4px",
//   alighnItems: "center",
//   cursor: "pointer",
// };

const styles = {
  mouseContainer: {
    backgroundColor: "#d3eeca",
    width: "100%",
    height: "70vh",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  // /pics/land.webp"

  chasingElement: {
    backgroundColor: "#7771c7",
    width: 400,
    height: 200,
  },
};

const Leftboard = () => {
  function UserMessage(props) {
    return (
      <div className="leftboard__users_user">
        <div>
          <Avatar
            alt="Remy Sharp"
            src={props.image || "/static/images/avatar/1.jpg"}
          />
        </div>
        <div className="leftboard__users_user_info">
          <h3>{props.title}</h3>
          <p>
            {props.message.slice(0, 25) +
              (props.message.length > 25 ? "..." : "")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="leftboard-container">
      {/* Start Study */}
      <div className="leftboard-container__start">
        <button
          className="leftboard-container__start_button"
          style={{ borderRadius: "10px" }}
        >
          Start Study
        </button>
        <button
          className="leftboard-container__start_button"
          style={{ borderRadius: "10px" }}
        >
          Stream Study
        </button>
      </div>
      {/* Conference Room */}
      <div className="leftboard-container__conference_room">
        {/* Icon */}
        <GroupsOutlinedIcon />

        {/* Text */}
        <p>Conference Room</p>

        {/* Icon */}
        <LockOutlinedIcon />
      </div>

      {/* Messages */}
      <p>Messages</p>
      <div className="leftboard-container__messages">
        {/* User Message */}
        {userMessage.map((user, index) => (
          <UserMessage
            title={user.title}
            message={user.message}
            image={user.image}
            key={index}
          />
        ))}

        {/* Job Offers */}
        <hr />

        <div className="leftboard-container__job_offers">
          <EmailIcon />
          <h3>Job Offers</h3>
        </div>
      </div>
    </div>
  );
};

// style = { margin: "1rem" };

const Middleboard = () => {
  return (
    <>
      <div className="middleboard-container">
        {/* Numbers */}
        <ul className="scores">
          <li>
            850<span>session mins</span>
          </li>
          <li>
            12<span>projects done</span>
          </li>
          <li>
            140<span>community score</span>
          </li>
          <li>
            5<span>milestones</span>
          </li>
        </ul>

        {/* Image */}
        <div>
          <MouseContainer
            options={{
              effectType: "perspective", // or 'movement'
              max: 28,
              perspective: 1000,
              scale: 1.05,
            }}
            chasingElement={
              <ChasingElement>
                <img src="/pics/land.webp" alt="User Land" width="500vw" />
              </ChasingElement>
            }
          />
          {/* changing the MUI icon 100px to right*/}
          <AssistantPhotoIcon
            style={{
              position: "relative",
              left: "300px",
              bottom: "120px",
              color: "red",
              cursor: "pointer",
            }}
          />
        </div>

        {/* Statistics */}
        <div>
          <ul className="middleboard-container__statistics">
            <li className="middleboard-container__statistics_item"></li>
            <h4>Your Skills</h4>
            <p>12</p>
            <li className="middleboard-container__community">
              Community / Individual Statistics
            </li>
            <li className="middleboard-container__inventry">
              <img src=""></img>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const Rightboard = () => {
  return (
    <div className="rightboard-container">
      {/* Calender */}
      <div className="rightboard__calender">
        {/* Time */}
        <div className="rightboard__calender_time">
          <div>
            <p>
              {new Date().toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>
            <p>{new Date().getDate()}</p>
          </div>
          <div class="rightboard__calender_time_span">
            <span>25</span>
            <span>50</span>
          </div>
        </div>

        {/* Event */}
        <div className="rightboard__calender_event">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* Next Course */}
      <div className="rightboard__nextup">
        <div className="rightboard__nextup_text">Next Up</div>
        <div className="rightboard__nextup_item">
          <span>C#</span>
        </div>
      </div>
    </div>
  );
};

/* <img
          src=".././pics/gold-frame.png"
          alt="golden-frame"
          className="frame-image"
        ></img>
        <h1 className="scores">23 450 5 16</h1>
        <img
          src=".././pics/gold-frame.png"
          alt="golden-frame"
          className="frame-image frame2"
        ></img>
        <div className="planet-container">
          <img
            src=".././pics/planet-a.png"
            alt="planeta"
            className="planet-a"
          ></img>
        </div>
        <Box className="meetpoint">Meetpoint</Box>
        <Box className="live">Live</Box>
        <div className="data-box-container">
          <Box
            // sx={style}
            style={{ width: "15vw", height: "30vh" }}
            className="box1"
          >
            box
          </Box>
          <Box
            // sx={style}

            className="box2"
            style={{ width: "20vw", height: "30vh" }}
          >
            box
          </Box>
          <Box
            // sx={style}

            className="box3"
            style={{ width: "15vw", height: "15vh" }}
          >
            box
          </Box>
          <Box
            // sx={style}

            className="box4"
            style={{ width: "15vw", height: "15vh" }}
          >
            box
          </Box>
        </div> */
