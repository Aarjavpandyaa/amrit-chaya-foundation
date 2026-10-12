import { apiGet, apiPost } from './api';
import { tours } from '../data/tours';

// export const getTours = () => apiGet('/api/tours');
export const getTours = () => Promise.resolve(tours);

export const submitTourBooking = (data) => apiPost('/api/bookings/tour', data);
