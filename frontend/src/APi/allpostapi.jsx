const host = import.meta.env.MODE === "development"
  ? "http://localhost:3000"
  : 'https://blog-update-3-1.onrender.com/';

export const allpost = `${host}allpost`;
export const comment = `${host}comment`;
