import { useStore } from "./hooks/useStore";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gameOver from '../sounds/gameOver.mp3'
import ticking from '../sounds/ticking.mp3'
const tickingSFX = new Audio(ticking);
const gameOverSFX = new Audio(gameOver);

const Timer = () => {
  const navigate = useNavigate();
  const time = useStore((state) => state.time);
  const timeSeconds = time.toFixed(2)
  const timer = useStore((state) => state.countDown);
  const overTime = useStore((state) => state.resetCountDown);

  const gameOver = () => {
    if(timeSeconds < 1){
        tickingSFX.volume = 0.8
        tickingSFX.play()
        tickingSFX.loop = false
    }
    if (Math.sign(time) == -1) {
        gameOverSFX.volume = 1
        gameOverSFX.play()
        gameOver.loop = false
      navigate("/lose");
      overTime()
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

  const style = "absolute text-white text-xl top-[20px] z-10";
  return (
    <div>
      <div className={style}>Timer:{timeSeconds} SECONDS</div>
    </div>
  );
};

export default Timer;
