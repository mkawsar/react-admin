import axios from 'axios';

const API_URL = 'http://path.to.my.api/';

const login = async (username: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem('user');
};

const authService = {
    login,
    logout,
};

export default authService;

