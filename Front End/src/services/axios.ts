import axios from "axios";

const axiosInstance = axios.create({
  //这里只是示例地址,具体接口地址要跟后端协商
  baseURL: "https://localhost:7234/api",
  timeout: 10000,
});

export default axiosInstance;
