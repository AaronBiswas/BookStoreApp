const API_BASE_URL = import.meta.env.PROD 
  ? "http://localhost:4000" // Empty string for same-origin requests in production
  : 'http://localhost:4000';

export default API_BASE_URL; 