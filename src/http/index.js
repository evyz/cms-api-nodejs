import axios from "axios";

export const url = "http://localhost:4000/api";

const $host = axios.create({
  baseURL: url,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

const $authHost = axios.create({
  baseURL: url,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

const authInterceptor = (config) => {
  config.headers.authorization = `bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
