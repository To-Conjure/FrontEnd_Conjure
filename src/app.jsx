
import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./components/menuPath/Login";
import Register from "./components/menuPath/Register";
import Interactive from "./components/Pages/Interactive";
import Error from "./components/menuPath/Error";
import HomeMenu  from "./components/Pages/HomeMenu";
import Game from "./components/Gaming/Game";
import Tutorial from "./components/Gaming/Tutorial";
import Win from "./components/Gaming/Win";
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