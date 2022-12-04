import React from "react";
import { Box, typography } from "@mui/material";
import { AmbientLight } from "three";

var style = {
  color: "primary.main",
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
  border :"1px solid black",
  borderRadius:"4px",
  alighnItems:"center",
  cursor:"pointer",
};

const Leftboard = () => {
  return (
    <div className="leftboard-container">
      <Box sx={style} 
  >
        <button className="start-session">Start Session</button>
      </Box>
      <Box 
      sx={style}
      style={{ height:"7rem" }}>
    
      <div className="conference">Conference Room</div>
      </Box>
      <Box sx={style}
        color="primary.contrastText"
        style={{ height: "17rem" }}
      >
        <div className="messages">Messages</div>
        <div className="">Session request</div>
        <div className="">Help request</div>
        <div className="">Job Offer</div>
      </Box>
    </div>
  );
};

export default Leftboard;
