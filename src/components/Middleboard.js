import React from "react";
import { Box } from "@mui/material";
// import { Box, typography } from "@mui/material";
// import { AmbientLight } from "three";

const style = {
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
  border: "1px solid black",
  borderRadius: "4px",
  alighnItems: "center",
};

const Middleboard = () => {
  return (
    <>
      <div className="middleboard-container">
        <h1 className="scores"> 231 / 334 / 341/ 324</h1>
        <Box style={style} />
        <Box style={style} />
        <Box style={style} />
        <Box style={style} />
      </div>
    </>
  );
};

export default Middleboard;
