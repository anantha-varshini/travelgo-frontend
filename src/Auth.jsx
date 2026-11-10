
import axios from 'axios';

const API_URL = "https://travelgo-backend-five.vercel.app";

export const register = async (username, password) => {
    try {
        const response = await axios.post(
            `${API_URL}/register`,
            { username, password }
        );

        return response.data;

    } catch (err) {
        console.error(
            "Registration API error:",
            err.response?.data || err.message
        );

        throw new Error(
            err.response?.data?.message || "Registration Failed"
        );
    }
};

export const login = async (username, password) => {
    try {
        const response = await axios.post(
            `${API_URL}/login`,
            { username, password }
        );

        const token = response.data.token;

        localStorage.setItem('token', token);

        return token;

    } catch (err) {
        console.error(
            "Login API error:",
            err.response?.data || err.message
        );

        throw new Error(
            err.response?.data?.message || "Login Failed"
        );
    }
};
