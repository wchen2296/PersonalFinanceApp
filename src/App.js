import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './style.css';
import Nav from './components/Nav.js';
import Home from './components/Home.js';

export default function App() {
  return (
    <Router>
      <Nav />
    <Routes>
      <Route path='/' Component={Home}/>
    </Routes>
    </Router>
  );
}
