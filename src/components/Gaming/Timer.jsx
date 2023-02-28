import { useStore } from "./hooks/useStore";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gameOver from "../sounds/gameOver.mp3";
import ticking from "../sounds/ticking.mp3";
const tickingSFX = new Audio(ticking);
const gameOverSFX = new Audio(gameOver);

const Timer = () => {
  const navigate = useNavigate();
  const time = useStore((state) => state.time);
  const timeSeconds = time.toFixed(2);
  const timer = useStore((state) => state.countDown);
  const overTime = useStore((state) => state.resetCountDown);
  const textStyle = {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    background: "#232323",
    textShadow:
      "0 0 5px #ff0f7b, 0 0 10px #ff0f7b, 0 0 15px #ff0f7b, 0 0 20px #ff0f7b, 0 0 30px #ff0f7b, 0 0 40px #ff0f7b, 0 0 55px #ff0f7b, 0 0 75px #ff0f7b",
    color: "#FFFFFF",
    background: "transparent",
    fontSize: "36px",
  };
  const gameOver = () => {
    if (timeSeconds < 1) {
      tickingSFX.volume = 0.8;
      tickingSFX.play();
      tickingSFX.loop = false;
    }
    if (Math.sign(time) == -1) {
      gameOverSFX.volume = 1;
      gameOverSFX.play();
      gameOver.loop = false;
      navigate("/lose");
      overTime();
    }
  };
  gameOver();

  const timerTracker = () => {
    timer();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      timerTracker();
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const tailwindStyle = "absolute text-white z-10";
  const cssStyle = {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    background: "#232323",
    textShadow:
      "0 0 5px #ffc8c8, 0 0 10px #ff0f7b, 0 0 15px #ff0f7b, 0 0 20px #ff0f7b, 0 0 30px #ff0f7b, 0 0 40px #ff0f7b, 0 0 55px #ff0f7b, 0 0 75px #ffc8c8",
    color: "#FFFFFF",
    background: "transparent",
    fontSize: "36px",
    top: "50px"
  };
  return (
    <div>
      <div className={tailwindStyle} style={cssStyle}>
        TIME: {timeSeconds}
      </div>
    </div>
  );
};

export default Timer;
