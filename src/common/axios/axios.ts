import axios from 'axios';

const AxiosService = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
});

export default AxiosService;
