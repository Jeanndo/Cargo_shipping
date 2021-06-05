import React from "react";
import './App.css';
import Routes from '../src/Routes/index';
import {BrowserRouter} from "react-router-dom";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
};

export default App;
