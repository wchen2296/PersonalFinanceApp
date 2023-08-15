import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

export default function Home() {
  return (
    <div className="hero">
      <h1 className="hero-message">So you have chosen... financial wisdom.</h1>
      <h2 className="hero-message2">two things are certain: 'This is fine' 🔥🐶 and you nailing personal finance with us.</h2>
      {/*
      remember to implement get started page/login
       */}
      <Link to="/get-started" className="get-started-button"><p>Get Started</p>
      </Link>
     
    </div>
  );
}
