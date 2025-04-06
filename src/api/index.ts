import axios from 'axios';

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000
});

// 请求拦截
service.interceptors.request.use(config => {
  // 添加 token 等逻辑
  return config;
});

// 响应拦截
service.interceptors.response.use(
  response => response.data,
  error => {
    // 错误处理
    return Promise.reject(error);
  }
);

export default service;
