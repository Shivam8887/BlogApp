const host =import.meta.env.MODE === "development" ? "http://localhost:3000":"https://blogapp-cit3.onrender.com/";
export const login = `${host}login`;
export const signup = `${host}signup`;
export const blogs = `${host}blogs`;
export const createpost = `${host}createpost`;
export const allpost = `${host}allpost`
export const deletepost = `${host}deletepost`
export const updatepost = `${host}updatepost`
