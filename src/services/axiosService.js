import axios from "axios";
import { UNAUTHORIZED_ERROR } from "../constants/error.jsx";

import store from "../redux/store";
import { logout, setAccessToken } from "../redux/userSlice";

let isRefreshing = false;
let failedQueue = [];

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Để gửi cookie (refresh token)
});

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });
  failedQueue = [];
};

// Add Authorization header from Redux token
axiosClient.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.user.access_token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle response errors
axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error?.response?.status;

    if (status === UNAUTHORIZED_ERROR.status && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = "Bearer " + token;
            return axiosClient(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      isRefreshing = true;

      try {
        const { data } = await axiosClient.post("/auth/refresh"); // refresh token qua cookie
        const newToken = data.access_token;

        store.dispatch(setAccessToken(newToken));

        axiosClient.defaults.headers.Authorization = "Bearer " + newToken;
        processQueue(null, newToken);

        originalRequest.headers.Authorization = "Bearer " + newToken;
        return axiosClient(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        store.dispatch(logout());
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
