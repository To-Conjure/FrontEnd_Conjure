
import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./components/menuPath/Login";
import Register from "./components/menuPath/Register";
import Interactive from "./components/Interactive";
import Error from "./components/menuPath/Error";
import HomeMenu  from "./components/HomeMenu";

const App = () => {
    <>
        <Routes>
          <Route path="/" element={<HomeMenu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/play" element={<Interactive />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </>
}

export default App;