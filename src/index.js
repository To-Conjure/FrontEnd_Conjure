import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import { Footer } from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import ContextProvider from "./Context/ContextProvider";
import HomeMenu from "./components/HomeMenu";
import Interactive from "./components/Interactive";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <ContextProvider>
        <Suspense fallback={null}>
          <App />
          <HomeMenu />
          <Footer />
        </Suspense>
        <Loader />
      </ContextProvider>
    </BrowserRouter>
  </>
);
