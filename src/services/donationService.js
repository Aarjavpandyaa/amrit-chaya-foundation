import { apiPost } from './api';

export const submitDonation = (data) => apiPost('/api/donations', data);
