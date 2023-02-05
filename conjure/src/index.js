import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Suspense} from 'react';
import { Loader } from '@react-three/drei';
// import { createRoot } from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Suspense fallback = {null}>
    <></>
  </Suspense>
  <Loader/>
  </>
);


