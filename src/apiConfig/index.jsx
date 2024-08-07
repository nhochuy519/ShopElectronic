import axios from 'axios';
// axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: 'https://apielecweb.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default instance;
