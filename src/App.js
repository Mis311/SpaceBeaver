import "./App.css";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/Sphere";
import React, { useState } from "react";
import ActiveUser from "./components/ActiveUser";
import Calendar from  "./components/Calendar";
import Session from "./pages/Session";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const  [show, setShow] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/session" element=<Session/>></Route>
        </Routes>
    
      <div id="canvas-container">
        {show? <ActiveUser /> :null}
        <Canvas>
          <Sphere />
          <ambientLight
            intensity={1}
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
          />
          <pointLight position={[-10, -10, -10]} />
        </Canvas>
        <button onClick={()=>setShow(!show) }  className="star-button">★</button>
        {show?<Calendar/>:null}
        <Link to="/session">Session</Link>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
