import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const register = (username: string, email: string, password: string) => {
    return axios.post(`${API_URL}/register`, {
        username,
        email,
        password
    });
};
