import { create } from 'zustand';


const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
const setLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const authStore = create((set) => ({
  isAuth: getLocalStorage('isAuth') ?? null, 
  setAuth: (value) => {
    set({ isAuth: value });
    setLocalStorage('isAuth', value); 
  },
}));
