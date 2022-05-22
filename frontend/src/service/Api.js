import axios from 'axios';
import { API_BASE_URL } from '../app-config';

const Api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export default Api;
