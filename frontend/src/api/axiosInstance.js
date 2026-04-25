import axios from 'axios';

const API_URL = "https://blogapplicationnn.onrender.com";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default axiosInstance;
