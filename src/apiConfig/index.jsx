import axios from 'axios';
axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: 'https://apielecweb.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
    // Thêm các header khác nếu cần
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

export default instance;
