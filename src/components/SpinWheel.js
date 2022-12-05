import { useRef, useState } from "react";

const SpinWheel = () => {
  let wheel = useRef("");
  let button = useRef("");
  let total;

  const [show, setShow] = useState(false),
    [item, setItem] = useState("");

  if (show) {
    return (
      <div>
        <h1>{Prize(total)}</h1>
      </div>
    );
  }

  const spin = () => {
    let number = Math.ceil(Math.random() * 10000);
    let random = Math.floor(Math.random() * 360);
    total = random + number;

    wheel.current.style.transform = `rotate(${total}deg)`; //rotate the wheel
    button.current.style.pointerEvents = "none"; //disable the button
    wheel.current.style.transition = "all 5s ease-out"; //add transition

    setTimeout(() => {
      button.current.style.pointerEvents = "auto"; //enable the button
      wheel.current.style.transition = "none"; //remove transition
      let deg = total % 360; //find the degree
      wheel.current.style.transform = `rotate(${deg}deg)`; //rotate the wheel
    }, 5500);
  };

  function Prize(deg) {
    if (deg % 0 <= 0 && deg % 72 >= 0) setItem("book");

    if (deg % 0 <= 72 && deg % 144 >= 0) setItem("ticket for astro");

    if (deg % 0 <= 144 && deg % 216 >= 0) setItem("secret item");

    if (deg % 0 <= 216 && deg % 288 >= 0) setItem("ticket for build material");

    if (deg % 0 <= 288 && deg % 365 >= 0) setItem("ticket for beaver item");
  }

  return (
    <>
      {/* Wheel */}
      <div>
        <button className="spin-button" ref={button} onClick={spin}>
          Spin the wheel
        </button>

        <img src="../pics/wheel.png" alt="wheel" ref={wheel}></img>
      </div>

      {/* Prize */}
      <div className="wheel__prize">
        <div className="wheel__prize_text">
          You won a {Prize(total)} {item}!
        </div>
        <div className="wheel__prize_image"></div>
      </div>
    </>
  );
};

export default SpinWheel;
