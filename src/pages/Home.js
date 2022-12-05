// Components
import { Canvas } from "@react-three/fiber";

// Custom Components
import SpinWheel from "../components/SpinWheel";
import Sphere from "../components/Sphere";
import ActiveUser from "../components/ActiveUser";
import Calendar from "../components/Calendar";

export default function Home({ show, setShow }) {
  return (
    <>
      <div id="canvas-container">
        {show ? <ActiveUser /> : null}

        <button onClick={() => setShow(!show)} className="star-button">
          ★
        </button>
        {show ? <Calendar /> : null}
      </div>

      <Canvas style={{ height: "80vh" }}>
        <Sphere />
        <ambientLight
          intensity={1}
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
        />
        <pointLight position={[-10, -10, -10]} />
      </Canvas>
      <SpinWheel />
    </>
  );
}
