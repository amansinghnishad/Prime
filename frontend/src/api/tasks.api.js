import apiClient from './axios';

export const tasksApi = {
    getAll: () => apiClient.get('/tasks'),
    create: (data) => apiClient.post('/tasks', data),
    update: (id, data) => apiClient.patch(`/tasks/${id}`, data),
    delete: (id) => apiClient.delete(`/tasks/${id}`),
};
