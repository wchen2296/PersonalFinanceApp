import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <Link to="/" className="logo">
              <h1>
                Finance App
                </h1>
            </Link>
            
            <button className="menu-toggler" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Close' : 'Menu'}
            </button>

            <div className={`navlinks ${isOpen ? 'open' : ''}`}>
                <li>
                    <Link to="/overview" onClick={() => setIsOpen(false)}><p>Overview</p></Link>
                </li>
                <li>
                    <Link to="/budget" onClick={() => setIsOpen(false)}><p>Budget</p></Link>
                </li>
                <li>
                    <Link to="/login" onClick={() => setIsOpen(false)}><p>Login</p></Link>
                </li>
            </div>
        </nav>
    );
}
