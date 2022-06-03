import React from 'react';
import { Link } from 'react-router-dom';
// need to change button to onclick once authentication comes into play
export const Login = () => (
    <div className="content-container flex-it flex-center flex-column login-container">
        <h1>Hello There</h1>
        
        <Link to="/dashboard">Login</Link>
    </div>
);

export default Login;