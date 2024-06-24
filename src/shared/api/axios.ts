import axios, { InternalAxiosRequestConfig } from 'axios';
const api = axios.create({ baseURL: 'http://5.35.11.45:3000/', withCredentials: true })

api.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access')}`
    return config;
})

export default api;