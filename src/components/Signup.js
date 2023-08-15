// src/components/SignUp.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const SignUp = () => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Simple password confirmation check
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        
        // Handle sign up logic here. Call an API endpoint.
        console.log(firstName, lastName, email, password);
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className="signup-input"
                    type="text"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                    placeholder="First Name"
                    required
                />
                   <input
                    className="signup-input"
                    type="text"
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                    placeholder="Last Name"
                    required
                />
                <input
                    className="signup-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    className="signup-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <input
                    className="signup-input"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                />
                <button className="signup-button" type="submit">Sign Up</button>
            </form>
            <div className="login-link">
                <p>Already have an account? </p>
                <Link to="/login" className="login">Log in here</Link>
            </div>
        </div>
    );
};

export default SignUp;
