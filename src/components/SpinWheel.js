import { useRef } from "react";

const SpinWheel = () => {
    let wheel = useRef("");
    let button = useRef("");
    let number =Math.ceil(Math.random()*1000);
      return (
        <>
        <button ref={button} onClick={
          () => { wheel.current.style.transform = "rotate(" + number + "deg)";
          wheel.current.style.transtion = "all 10s ease-out";
          number += Math.ceil(Math.random()*1000) }
        }> Spin the wheel</button>
        <div className="wheelContainer">
          <img src=".././pics/wheel.png" alt="wheel" className="wheel" ref={wheel}></img> 
        </div>
        
         </>
  )
}

export default SpinWheel;