import apiClient from './axios';

export const authApi = {
    login: (payload) => apiClient.post('/users/login', payload),
    register: (payload) => apiClient.post('/users/register', payload),
    logout: () => apiClient.post('/users/logout'),
    getCurrentUser: () => apiClient.get('/users/current-user'),
    refreshToken: () => apiClient.post('/users/refresh-token'),
};
