import { useStore } from "./hooks/useStore";
import React from "react";
import "./game.css"

const Points = () => {
    const points = useStore(state => state.points)
    return (
        <div>
        <div className="absolute text-[120px] inset-x-0 z-10">Total Points {points}</div>
        </div>
    )
  };

  export default Points