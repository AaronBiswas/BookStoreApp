const API_BASE_URL = import.meta.env.PROD 
  ? '' // Empty string for same-origin requests in production
  : 'http://localhost:4001';

export default API_BASE_URL; 