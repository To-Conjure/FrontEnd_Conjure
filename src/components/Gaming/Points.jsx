import { useStore } from "./hooks/useStore";
import React from "react";
import "./game.css";

const Points = () => {
  const points = useStore((state) => state.points);
  const cssStyle = "absolute text-white text-xl inset-x-0 z-10";
  const textStyle = {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    background: "#232323",
    textShadow:
      "0 0 5px #aefb2a, 0 0 10px #57ebde, 0 0 15px #57ebde, 0 0 20px #57ebde, 0 0 30px #57ebde, 0 0 40px #57ebde, 0 0 55px #57ebde, 0 0 75px #aefb2a",
    color: "#FFFFFF",
    background: "transparent",
    fontSize: "36px",
  };
  return (
    <div>
      <div className={cssStyle} style={textStyle}>
        Total Points: {points}
      </div>
    </div>
  );
};

export default Points;
