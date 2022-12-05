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
import { FastForward } from "@mui/icons-material";

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
const beaverMessage = () => {
  
  if (beaverMessage) {
    alert("Hey friend, I took care of your manglobe garden");
  }
};
const friendMessage = () => {
  
  if (beaverMessage) {
    alert("Licky: Hey dude, I am going to walk to blockbuster cave. Meet me halfway");
  }
};
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
            onClick = { () => friendMessage() }
          />
        </div>

        {/* Statistics */}
        <div className="middleboard-container">
          <ul className="middleboard-container__statistics">
            <li className="middleboard-container__statistics_item">
              <h4>Your Skills</h4>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <img
                className="astro"
                src=".././pics/astronaut.png"
                alt="astro"
                width="100vw"
              />
            </li>
            <li className="middleboard-container__community">
              <h4>Community / Individual Statistics</h4>
              <img src=".././pics/stats.png" alt="stats" width="200vw" />
            </li>
            <li className="middleboard-container__inventry">
              <h4>Inventory</h4>
              <img
                className="beaver-john"
                src=".././pics/beaver-john.png"
                alt="beaver-john"
                width="100vw"
                onClick = { () => beaverMessage() }
              />
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
      RIGHT BOARD
      {/* Calender */}
      <div></div>
      {/* Next Course */}
      <div></div>
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
