import axios from 'axios';
// axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: 'https://apielecweb-1.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default instance;
