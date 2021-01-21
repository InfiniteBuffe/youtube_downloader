import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/index';
import './style.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={ Home }/>
      </BrowserRouter>
    </>
  );
}

export default App;
