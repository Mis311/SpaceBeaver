import "./App.css";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/Sphere";
import React, { useState } from "react";
import ActiveUser from "./components/ActiveUser";
import Calendar from  "./components/Calendar";
function App() {
  const  [show, setShow] = useState(false);

  return (
    <>
      
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
      </div>
    </>
  );
}

export default App;
