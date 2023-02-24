import { useStore } from "./hooks/useStore";
import React from "react";
import "./game.css"

const Points = () => {
    const points = useStore(state => state.points)
    const style = "absolute text-white text-xl inset-x-0 z-10"
    return (
        <div>
            <div className= {style}>Total Points {points}</div>
        </div>
    )
  };

  export default Points