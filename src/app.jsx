
import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./components/menuPath/Login";
import Register from "./components/menuPath/Register";
import Interactive from "./components/Pages/Interactive";
import Error from "./components/menuPath/Error";
import HomeMenu  from "./components/Pages/HomeMenu";
import Game from "./components/gaming/Game";
import Tutorial from "./components/gaming/Tutorial";
import Win from "./components/gaming/Win";

const App = () => {
    return (
        <Routes>
          <Route path="/" element={<Interactive />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/play" element={<HomeMenu />} />
          <Route path="/game" element={<Game />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/win" element={<Win />} />
          <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default App;