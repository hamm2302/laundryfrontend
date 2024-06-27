import axios from 'axios';
import { environment } from 'src/environments/environment';

const axiosInstance = axios.create({
  baseURL: environment.baseUrl,
  headers: {
    'laundryin-api-key': environment.apiKey,
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  },
});

export default axiosInstance;
