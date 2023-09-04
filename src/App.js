import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Home from './Home/index';
// import Product from "./Product/index";
import About from "./About/index";
import Contact from "./Contact/index";
// import Footer from './Footer';

function App() {
  return (
    <div className="App">
    {/* <Home/>
    <Product/> */}
    <About/>
    <Contact/>
    {/* <Footer/> */}
     
    </div>
  );
}

export default App;
