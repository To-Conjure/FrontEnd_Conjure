import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Suspense} from 'react';
import { Loader } from '@react-three/drei';
import { Footer } from './components/Footer';
import { TitleMenu } from './components/TitleMenu';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Suspense fallback = {null}>
    <TitleMenu/>
    <Footer/>
  </Suspense>
  <Loader/>
  </>
);


