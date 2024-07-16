import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://apielecweb.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
    // Thêm các header khác nếu cần
  },
});

export default instance;
