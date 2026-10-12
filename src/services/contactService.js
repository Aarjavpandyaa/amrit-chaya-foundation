import { apiPost } from './api';

export const submitContactForm = (data) => apiPost('/api/contact', data);
