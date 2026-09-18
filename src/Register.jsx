import React, { useState } from 'react';
import { register } from './Auth';
import { Link, useNavigate } from 'react-router-dom';
import "./App.css";

const Register = () => {

    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState({});
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });
    };


    // Validation
    const validation = () => {

        const newError = {};

        // Username validation
        if (!form.username.trim()) {
            newError.username = "Invalid username";
        }

        // Password validation
        if (!form.password) {
            newError.password = "Password is required";
        }
        else {

            if (form.password.length < 8) {
                newError.password = "Password must contain at least 8 characters";
            }
            if (!/[a-z]/.test(form.password)) {
                newError.password = "Password must contain a lowercase letter";
            }
            if (!/[A-Z]/.test(form.password)) {
                newError.password = "Password must contain an uppercase letter";
            }
            if (!/[!@#$%&*?]/.test(form.password)) {
                newError.password = "Password must contain a special character";
            }
        }

        return newError;
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const validationError = validation();

        if (Object.keys(validationError).length !== 0) {
            setError(validationError);
            return;
        }

        try {

            await register(
                form.username,
                form.password
            );

            setSuccess("Registered Successfully");
            setError({});

            // Go to login page
            navigate("/login");

        } catch (err) {

            console.log("Registration Error", err);

            setError({
                server: "Registration Failed"
            });

            setSuccess("");
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>

            <h2>Register</h2>

            <label>UserName</label>
            <input type="text"name="username"placeholder="Enter username"value={form.username}onChange={handleChange}/>

            {error.username && (<p style={{ color: "red" }}> {error.username}</p>)}

            <label>Password</label>
            <input type="password"name="password" placeholder="Enter password" value={form.password} onChange={handleChange}/>

            {error.password && (<p style={{ color: "red" }}> {error.password} </p>)}
            {error.server && ( <p style={{ color: "red" }}> {error.server}</p> )}

            <button type="submit"> Register</button>
            <p>Already registered?</p>
            <Link to="/login"><button type="button">Login</button></Link>

        </form>
    );
};

export default Register;