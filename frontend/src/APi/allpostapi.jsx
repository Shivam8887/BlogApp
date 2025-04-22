const host = import.meta.env.MODE === "development"
  ? "http://localhost:3000"
  : 'https://blogapp-cit3.onrender.com/';

export const allpost = `${host}allpost`;
export const comment = `${host}comment`;
