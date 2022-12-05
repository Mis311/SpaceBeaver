import { useRef } from "react";
import { smootherstep } from "three/src/math/MathUtils";

const SpinWheel = () => {
  let wheel = useRef("");
  let button = useRef("");

  //make it more smooth spinning
  const spin = () => {
    let number = Math.ceil(Math.random() * 10000);
    let random = Math.floor(Math.random() * 360);
    let total = random + number;
    wheel.current.style.transform = `rotate(${total}deg)`; //rotate the wheel
  };
  return (
    <>   
      <button
        ref={button}
        onClick={() => {
          spin();
        }}
      >
        Spin the wheel
      </button>
      <div className="wheelContainer">
        <img
          src=".././pics/wheel.png"
          alt="wheel"
          className="wheel"
          ref={wheel}
        ></img>
      </div>
    </>
  );
};


export default SpinWheel;

