import React from "react";
import "./dashboard.css";
import Leftboard from "../components/Leftboard";
function Dashboard(){
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="logo">Dashboard</div></div>
      <Leftboard />
      
    </div>
  )
}

export default Dashboard;
