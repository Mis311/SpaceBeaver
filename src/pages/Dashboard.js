import React from "react";
import { Box } from "@mui/material";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="logo">Dashboard</div>
      </div>
      <Leftboard />
      <Middleboard />
      <Rightboard />
    </div>
  );
}

var style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  bgcolor: "primary.main",
  color: "primary.contrastText",
  padding: "2rem",
  margin: "1.2rem",
  width: "12rem",
  height: "3rem",
  border: "1px solid black",
  borderRadius: "4px",
  alighnItems: "center",
  cursor: "pointer",
};

const Leftboard = () => {
  return (
    <div className="leftboard-container">
      <Box sx={style}>
        <button className="start-session">Start Session</button>
      </Box>
      <Box sx={style} style={{ height: "7rem" }}>
        <div className="conference">Conference Room</div>
      </Box>
      <Box sx={style} color="primary.contrastText" style={{ height: "17rem" }}>
        <div className="messages">Messages</div>
        <div className="">Session request</div>
        <div className="">Help request</div>
        <div className="">Job Offer</div>
      </Box>
    </div>
  );
};

style = { margin: "1rem" };

const Middleboard = () => {
  return (
    <>
      <div className="middleboard-container">
        <img
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
        <Box style={style} className="meetpoint">
          Meetpoint
        </Box>
        <Box style={style} className="live">
          Live
        </Box>
        <div className="data-box-container">
          <Box
            sx={style}
            style={{ width: "15vw", height: "30vh" }}
            className="box1"
          >
            box
          </Box>
          <Box
            sx={style}
            className="box2"
            style={{ width: "20vw", height: "30vh" }}
          >
            box
          </Box>
          <Box
            sx={style}
            className="box3"
            style={{ width: "15vw", height: "15vh" }}
          >
            box
          </Box>
          <Box
            sx={style}
            className="box4"
            style={{ width: "15vw", height: "15vh" }}
          >
            box
          </Box>
        </div>
      </div>
    </>
  );
};

const Rightboard = () => {
  return <div className="rightboard-container">Rightboard</div>;
};
