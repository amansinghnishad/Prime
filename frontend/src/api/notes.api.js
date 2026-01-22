import apiClient from './axios';

export const notesApi = {
    getAll: () => apiClient.get('/notes'),
    create: (data) => apiClient.post('/notes', data),
    update: (id, data) => apiClient.patch(`/notes/${id}`, data),
    delete: (id) => apiClient.delete(`/notes/${id}`),
};
