import React from "react";
import "./dashboard.css";
import Leftboard from "../components/Leftboard";
import Middleboard from "../components/Middleboard";
import Rightboard from "../components/Rightboard";
function Dashboard(){
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="logo">Dashboard</div></div>
      <Leftboard />
      <Middleboard />
      <Rightboard />
    </div>
  )
}

export default Dashboard;
