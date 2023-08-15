import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './style.css';
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';

export default function App() {
  return (
    <Router>
      <Nav />
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/login' Component={Login}/>
      <Route path='/signup' Component={Signup}/>
    </Routes>
    </Router>
  );
}
