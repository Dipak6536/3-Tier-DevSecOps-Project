// src/axios.js
import axios from 'axios';

const instance = axios.create({
<<<<<<< HEAD
  baseURL: 'http://localhost:5000/api'
=======
  baseURL: '/api', // Proxy from frontend NGINX to backend K8s service
>>>>>>> de0e3c9 (K8s deployment)
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

export default instance;
