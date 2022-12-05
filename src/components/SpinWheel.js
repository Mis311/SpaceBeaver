import { Button } from "@mui/material";
import { useRef, useState } from "react";

const SpinWheel = () => {
  let wheel = useRef(""),
    button = useRef(""),
    [show, setShow] = useState(false),
    [reward, setReward] = useState({
      name: "",
      info: "",
    }),
    total = 0,
    rewards = [
      { name: "secret", info: "secret space ball from planet AndromedaX75" },
      { name: "books", info: "book" },
      { name: "astronaut", info: "ticket for astro" },
      { name: "trees", info: "ticket for build material" },
      { name: "beaver", info: "ticket for beaver item" },
    ];

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
      setShow(true);
    }, 5500);
  }

  function Prize(deg) {
    // if value lies between 0 and 72, and same for its diviiser
    if (0 % deg <= 0 && 72 % deg >= 0) {
      setReward({
        name: rewards[0].name,
        info: rewards[0].info,
      });
    }

    if (72 % deg <= 0 && 144 % deg >= 0) {
      setReward({
        name: rewards[1].name,
        info: rewards[1].info,
      });
    }

    if (144 % deg <= 0 && 216 % deg >= 0) {
      setReward({
        name: rewards[2].name,
        info: rewards[2].info,
      });
    }

    if (216 % deg <= 0 && 288 % deg >= 0) {
      setReward({
        name: rewards[3].name,
        info: rewards[3].info,
      });
    }

    if (288 % deg <= 0 && 365 % deg >= 0) {
      setReward({
        name: rewards[4].name,
        info: rewards[4].info,
      });
    }
  }

  return (
    <>
      {/* Wheel */}
      <div className="wheel__start_container">
        <div className="wheel__start">
          <button
            className="spin-button"
            ref={button}
            onClick={spin}
            style={{
              transform: "translateY(3rem)",
              zIndex: 1,
            }}
          >
            Spin the wheel
          </button>

          <img src="../pics/wheel.png" alt="wheel" ref={wheel}></img>
          <img className="rocket" src=".././pics/rocket.png" alt="rocket"></img>
        </div>
      </div>
      {/* Prize */}
      <div
        className="wheel__prize_container"
        style={{
          opacity: show ? 1 : 0,
          zIndex: show ? 2 : -1,
        }}
      >
        <div className="wheel__prize">
          <div className="wheel__prize_image">
            <img
              src={"/prizes/" + reward.name + ".png"}
              alt={reward.name}
              height="180"
            />
          </div>
          <div className="wheel__prize_text">
            <p>You won a {reward.info}!</p>
            <Button variant="contained" onClick={() => setShow(false)}>
              Claim Reward
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpinWheel;
