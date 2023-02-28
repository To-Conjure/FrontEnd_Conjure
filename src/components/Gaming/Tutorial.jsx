import tutorial from "../images/tutorial.png"
import play from "../images/playButton.png";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import flight from "../sounds/flight.mp3";

const flightSFX = new Audio(flight);

const Tutorial = () => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);

  const boxStyle = {
    backgroundColor: isHover ? 'black' : 'white',
    color: isHover ? 'black' : 'white',
    borderRadius: "50%",
    width: "300px"
 };

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <>
      <div className="w-full h-full bg-galaxy bg-no-repeat bg-cover flex justify-center">
        <img
          src={tutorial}
          alt="tutorial"
          className="h-full"
        />
      </div>
      <img
        src={play}
        alt="play"
        className="absolute bottom-0 right-0"
        style={boxStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick = {() => (flightSFX.play(),navigate("/game"))}
      />
    </>
  );
};
export default Tutorial;
