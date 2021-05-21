import axios from "axios";
import * as config from "./config";
console.log("config", config);

const instance = axios.create({
  baseURL: config.BASE_URL,
  timeout: config.TIMEOUT
});

instance.interceptors.request.use(
  config => config,
  err => {
    console.log(err);
  }
);

instance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err);
  }
);

export default instance;
