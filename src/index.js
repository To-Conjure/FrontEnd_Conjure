import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import { Footer } from "./components/Pages/Footer";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import UserProvider from "./Context/UserProvider";
//import ContextProvider from "./Context/ContextProvider";
// import ToggleMusic from "./components/Pages/ToggleMusic";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <UserProvider>
        <Suspense fallback={null}>
          <App />
          <Footer />
        </Suspense>
        <Loader />
      </UserProvider>
    </BrowserRouter>
  </>
);
