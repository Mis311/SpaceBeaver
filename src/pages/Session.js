// Components
import { useEffect, useState } from "react";
import { ChatEngine } from "react-chat-engine";
import { Canvas } from "@react-three/fiber";

// Custom Components
import ActiveUser from "../components/ActiveUser";
import Calendar from "../components/Calendar";
import Sphere from "../components/Sphere";

// CSS
import "./session.css";

const Session = ({ show, setShow, signMessage }) => {
  // State
  const [time, setTime] = useState(false),
    [start, setStart] = useState(false);

  // Updates the timer
  useEffect(() => {
    // if start is true, this starts the timer
    if (start) {
      setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);
    }

    // if time is 0, this stops the timer
    if (time === 0) {
      clearInterval();
      setStart(false);
    }
  }, [start, time]);

  // Handler on sphere button click
  const handleSphereClick = () => {
    if (!time) {
      signMessage("Start Timer?").then(() => {
        setTime(3600);
        setStart(true);
        console.log("Timer Started");
      });
    }
    // pauses the timer on the same number
    if (time && start) setStart(false);

    // resume the timer
    if (time && !start) setStart(true);

    console.log("Sphere clicked");
  };

  // Converts into hours, minutes, seconds
  function ConvertTime(number) {
    // convert numbers to 00:00:00 format
    var hours = Math.floor(number / 3600),
      minutes = Math.floor((number - hours * 3600) / 60),
      seconds = number - hours * 3600 - minutes * 60,
      time = "";

    time += hours < 10 ? "0" + hours : hours;
    time += minutes < 10 ? ":0" + minutes : ":" + minutes;
    time += seconds < 10 ? ":0" + seconds : ":" + seconds;
    return time;
  }

  return (
    <div className="session-page">
      <ChatEngine
        publicKey={"0e62100a-d070-4c57-90ab-a5a38f05f4b4"}
        userName={"ley"}
        userSecret={"1234"}
      />
      <Canvas
        style={{
          height: "100vh",
        }}
      >
        <Sphere handleSphereClick={handleSphereClick} />
        <ambientLight
          intensity={1}
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
        />

        <pointLight position={[-10, -10, -10]} />
      </Canvas>
      
      <div className={"chat-count "}>
        <p>Session Time</p>
        <div className="chat-count-text">
          {time ? ConvertTime(time) : "01:00:00"}
        </div>
      </div>

      <div id="canvas-container">
        {show ? <ActiveUser /> : null}

        {/*  */}
        <button onClick={() => setShow(!show)} className="star-button">
          ★ Active Users
        </button>
        {show ? <Calendar /> : null}
      </div>

    </div>
  );
};
export default Session;
