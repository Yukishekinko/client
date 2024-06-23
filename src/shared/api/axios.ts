import axios, { InternalAxiosRequestConfig } from 'axios';
const api = axios.create({ baseURL: 'http://localhost:3000/', withCredentials: true })

api.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access')}`
    return config;
})

export default api;