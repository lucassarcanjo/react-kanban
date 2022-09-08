import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

const baseURL = import.meta.env.VITE_API_URL ?? "http://localhost:5000";

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const login = async (forceRefresh = false) => {
  try {
    if (!forceRefresh) {
      const tokenLocal = localStorage.getItem("token");
      if (tokenLocal) return tokenLocal;
    }

    const tokenFromApi = await axios.post<string>(baseURL + "/login", {
      login: import.meta.env.VITE_DEFAULT_LOGIN,
      senha: import.meta.env.VITE_DEFAULT_PASSWORD,
    });

    localStorage.setItem("token", tokenFromApi.data);

    return tokenFromApi.data;
  } catch (error) {
    toast.error("Erro ao fazer login");
  }
};

api.interceptors.request.use(async (config) => {
  if (!config.headers) return;

  if (!config.headers?.Authorization) {
    const token = await login();
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (config) => config,
  async (error: Error | AxiosError) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      if (!error.config.headers) return;

      const token = await login(true);

      error.config.headers.Authorization = `Bearer ${token}`;
      return api.request(error.config);
    }

    return Promise.reject(error);
  }
);
