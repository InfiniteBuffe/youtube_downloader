import React, { useEffect } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/index';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={ Home }/>
      </BrowserRouter>
    </>
  );
}

export default App;
