import axios from 'axios';

const API_URL = 'http://localhost:1337/api';

export const login = (credentials) => {
  return axios.post(`${API_URL}/auth/local`, credentials);
};

export const register = (userData) => {
  return axios.post(`${API_URL}/auth/local/register`, userData);
};

export const getMe = (token) => {
  return axios.get(`${API_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};