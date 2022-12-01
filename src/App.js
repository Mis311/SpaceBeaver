import "./App.css";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/Sphere";
import { useState } from "react";
import ActiveUser from "./components/ActiveUser";
import Calendar from  "./components/Calendar";
function App() {
  const  [clicked, setClicked] = useState(false);

  return (
    <>
      
      <div id="canvas-container">
        <ActiveUser />
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
        <p className="star-button">★</p>
        <Calendar />
      </div>
    </>
  );
}

export default App;
