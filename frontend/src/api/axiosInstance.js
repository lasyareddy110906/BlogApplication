import axios from 'axios';

const API_URL = "https://blogapplicationnn.onrender.com";

const axiosInstance = axios.create({
  baseURL: "https://blogapplicationnn.onrender.com",
  withCredentials: true,
});

export default axiosInstance;
