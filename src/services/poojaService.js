import { apiGet, apiPost } from './api';
import { poojas } from '../data/poojas';

// --- Switch these when Python backend is ready ---
// export const getPoojas = () => apiGet('/api/poojas');
// export const getPoojaById = (id) => apiGet(`/api/poojas/${id}`);
export const getPoojas = () => Promise.resolve(poojas);
export const getPoojaById = (id) => Promise.resolve(poojas.find((p) => p.id === id) || null);

export const submitPoojaBooking = (data) => apiPost('/api/bookings/pooja', data);
