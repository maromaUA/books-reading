import axios from "axios";

const baseUrl = "https://bookread-backend.goit.global/api-docs";

axios.defaults.baseURL = baseUrl;

export const token = {
    set(token){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset(){
        axios.defaults.headers.common.Authorization = ""  
    }
}

export const registerUserApi = userForm =>{
    return axios.post('/auth/register', { ...userForm }).then(res => res);
}

export const loginUserApi = userForm => {
    return axios.post('/auth/login', { ...userForm }).then(res => res);
  };

  export const logoutUserApi = () => {
    return axios.post('/auth/logout').then(res => res);
  };

  export const refreshTokenApi = sid => {
    return axios.post('/auth/refresh', { sid }).then(res => res);
  };

  export const googleAuthApi = () => {
    return axios.get('auth/google').then(res => res);
  };

  export const getUserInfoApi = () => {
    return axios.get('/user/books').then(res => res);
  };
  