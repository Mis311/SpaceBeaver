import './App.css';
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/Sphere";
function App() {
  return (
    <>
      <div id="canvas-container">
        <Canvas>
          <Sphere />
          <ambientLight intensity={1} position={[10,10,10]} angle={0.15} penumbra={1}/>
          <pointLight position={[-10,-10,-10]}/>
        </Canvas>
      </div>
    </>
  );
}

export default App;
