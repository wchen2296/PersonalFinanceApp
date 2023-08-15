// src/components/Login.js

import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here. call an API endpoint.
        console.log(email, password);
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className="login-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    className="login-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button className="login-button" type="submit">Log In</button>
            </form>
            <div className="signup-link">
              <p>Dont have an account?</p><Link to='/signup' className="signup">Sign up here</Link>
            </div>
        </div>
    );
};

export default Login;
