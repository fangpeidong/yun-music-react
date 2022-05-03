import axios from 'axios';
const devBaseURL = 'http://123.207.32.32:9001';
const proBaseURL = 'http://123.207.32.32:9001';
export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {}
);

instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log('请求错误');
          break;
        case 401:
          console.log('未授权访问');
          break;
        default:
          console.log('其他错误信息');
      }
    }
    return err;
  }
);

export default instance;
