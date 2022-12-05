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
    button.current.style.pointerEvents = "none"; //disable the button
    wheel.current.style.transition = "all 4s ease-out"; //add transition
    setTimeout(() => {
      button.current.style.pointerEvents = "auto"; //enable the button
      wheel.current.style.transition = "none"; //remove transition
      let deg = total % 360; //find the degree
      wheel.current.style.transform = `rotate(${deg}deg)`; //rotate the wheel
    }, 10000);
  };
  return (
    <>
     
      <button className="spin-button" ref={button} onClick={spin}>
        Spin the wheel
      </button>
      <img
          src=".././pics/wheel.png"
          alt="wheel" ref={wheel}>
      </img>
    </>
  );
};

export default SpinWheel;
