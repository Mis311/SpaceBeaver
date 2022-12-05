import { useRef, useState } from "react";
// import { smootherstep } from "three/src/math/MathUtils";

const SpinWheel = () => {
  let wheel = useRef("");
  let button = useRef("");
  //**usestate framework*/
   const [show, setShow] = useState({ 
    show: false,
    setShow: false,
  });

function changeShow(){
    setShow(!show);
}

if (changeShow){
    return (
        <div>
            <h1>{Prize(total)}</h1>
        </div>
    )
}


  const spin = () => {
    let number = Math.ceil(Math.random() * 10000);
    let random = Math.floor(Math.random() * 360);
    let total = random + number;
    wheel.current.style.transform = `rotate(${total}deg)`; //rotate the wheel
    button.current.style.pointerEvents = "none"; //disable the button
    wheel.current.style.transition = "all 5s ease-out"; //add transition
    setTimeout(() => {
      button.current.style.pointerEvents = "auto"; //enable the button
      wheel.current.style.transition = "none"; //remove transition
      let deg = total % 360; //find the degree
      wheel.current.style.transform = `rotate(${deg}deg)`; //rotate the wheel
    }, 10000);



  };

  function Prize(deg) {
    if (deg % 0 <= 0 && deg % 72 >= 0) {
      alert("You won a new ticket for book!");
    }  if(deg % 0 <= 72 && deg % 144 >= 0 ) {
      alert("You won a new ticket for astro item!");
    } if(deg % 0 <= 144 && deg % 216>=0 ) {
      alert("You won a new secret item!");
    } if (deg % 0<= 216 && deg %288>= 0) {
      alert("You won a new ticket for build material!");
    }if (deg % 0 <= 288 && deg % 365>=0 ) {
      alert("You won a new ticket for beaver item!");
    
    }
  };
  
  return (
    <>
      <button className="spin-button" ref={button} onClick={spin}>
        Spin the wheel
      </button>
      
      <img src="../pics/wheel.png" alt="wheel" ref={wheel}></img>
   
    </>
  );
  };


export default SpinWheel;
