import axios from 'axios';

/**
 * Shared Axios instance.
 * Set VITE_API_URL in your .env file (e.g. VITE_API_URL=https://api.coutinhoteam.com.br).
 * Falls back to /api for same-origin proxy setups.
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? '/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10_000,
});

export default api;
