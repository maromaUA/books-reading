import axios from 'axios';

const baseUrl = 'https://bookread-backend.goit.global';

axios.defaults.baseURL = baseUrl;

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'application/json',
  },
});

export const token = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  },
};

export const registerUserApi = userForm => {
  return instance.post('/auth/register', { ...userForm }).then(res => res);
};

export const loginUserApi = userForm => {
  return instance.post('/auth/login', { ...userForm }).then(res => {
    console.log(res);
    return res;
  });
};

export const logoutUserApi = () => {
  return instance.post('/auth/logout').then(res => res);
};

export const addBookApi = bookForm => {
  return instance.post('/book', { ...bookForm }).then(res => res);
};

export const getPlanningApi = () => {
  return instance.get('/planning').then(res => res);
};

export const addPlanningApi = () => {
  return instance.post('/planning').then(res => res);
};

export const refreshTokenApi = sid => {
  return instance.post('/auth/refresh', { sid }).then(res => res);
};

export const googleAuthApi = () => {
  return instance.get('auth/google').then(res => res);
};

export const getUserInfoApi = () => {
  return instance.get('/user/books').then(res => res);
};
