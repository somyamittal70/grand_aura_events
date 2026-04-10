import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json",
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("admin_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Agar FormData hai to browser khud content-type set kare
    if (!(config.data instanceof FormData)) {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Agar token expire / unauthorized ho
    if (error.response?.status === 401) {
      console.warn("Unauthorized! Please login again.");

      // Optional auto logout:
      // localStorage.removeItem("admin_token");
      // window.location.href = "/admin/login";
    }

    return Promise.reject(error);
  }
);

export default api;