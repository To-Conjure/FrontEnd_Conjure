import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import { Footer } from "./components/Pages/Footer";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ContextProvider from "./Context/ContextProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <ContextProvider>
        <Suspense fallback={null}>
          <App />
          <Footer />
        </Suspense>
        <Loader />
      </ContextProvider>
    </BrowserRouter>
  </>
);
