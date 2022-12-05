import { useRef, useState } from "react";

const SpinWheel = () => {
  let wheel = useRef(""),
    button = useRef(""),
    [show, setShow] = useState(false),
    [reward, setReward] = useState(""),
    total = 0;

  function spin() {
    let number = Math.ceil(Math.random() * 10000);
    let random = Math.floor(Math.random() * 360);
    total = random + number;

    Prize(total);

    wheel.current.style.transform = `rotate(${total}deg)`; //rotate the wheel
    button.current.style.pointerEvents = "none"; //disable the button
    wheel.current.style.transition = "all 5s ease-out"; //add transition

    setTimeout(() => {
      button.current.style.pointerEvents = "auto"; //enable the button
      wheel.current.style.transition = "none"; //remove transition
      let deg = total % 360; //find the degree
      wheel.current.style.transform = `rotate(${deg}deg)`; //rotate the wheel
    }, 5500);
  }

  function Prize(deg) {
    // if value lies between 0 and 72, and same for its diviiser
    if (0 % deg <= 0 && 72 % deg >= 0) {
      setReward("book");
    }

    if (0 % deg <= 72 && 144 % deg >= 0) {
      setReward("ticket for astro");
    }

    if (0 % deg <= 144 && 216 % deg >= 0) {
      setReward("secret item");
    }

    if (0 % deg <= 216 && 288 % deg >= 0) {
      setReward("ticket for build material");
    }

    if (0 % deg <= 288 && 365 % deg >= 0) {
      setReward("ticket for beaver item");
    }
  }

  function Reward() {
    return (
      <div className="wheel__prize">
        <div className="wheel__prize_text">You won a {reward}!</div>
        <div className="wheel__prize_image"></div>
      </div>
    );
  }

  return (
    <>
      {/* Wheel */}
      <div className="wheel__start">
        <button className="spin-button" ref={button} onClick={spin}>
          Spin the wheel
        </button>

        <img src="../pics/wheel.png" alt="wheel" ref={wheel}></img>
        <img className="rocket" src=".././pics/rocket.png" alt="rocket"></img>
      </div>

      {/* Prize */}
      <Reward />
    </>
  );
};

export default SpinWheel;
