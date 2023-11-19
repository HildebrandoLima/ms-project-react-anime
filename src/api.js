import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-demon-slayer-9ut6.onrender.com/api/'
});

export default api;
