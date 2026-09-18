import React, { useState } from 'react';
import { login } from './Auth';
import "./App.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');
    const [success, setsucess] = useState('');
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = await login(username, password);
            console.log('Login successful, token:', token);
            alert('Login successful');

            setusername('');
            setpassword('');
            setsucess('Successfully Logged In');
            seterror('');
            navigate('/home')

        } catch (err) {
            console.log('Login Error', err);
            seterror('Login Failed');
            setsucess('');
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>

            <h2>Login</h2>

            <label>UserName</label>
            <input type="text"name="name" value={username}onChange={(e) => setusername(e.target.value)} required/>

            <label>Password</label>
            <input type="password"name="password"value={password}onChange={(e) => setpassword(e.target.value)}required/>
            
            <button type="submit">Login</button>
            {success && (<p style={{ color: "green" }}> {success} </p>)}
            {error && (<p style={{ color: "red" }}>{error} </p>)}

        </form>
    );
};

export default Login;