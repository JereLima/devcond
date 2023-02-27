import axios, {AxiosError, AxiosResponse} from 'axios';
import {IUser, useAppStore} from '../store/useAppStore';
import {} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'https://api.b7web.com.br/devcond/api';

const getTokenStorage = async () => {
  try {
    const response = await AsyncStorage.getItem('@token');
    return response;
  } catch (e) {
    console.log('error reading token');
  }
};

const Api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

Api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export const validateTokenRequest = async (): Promise<any | undefined> => {
  try {
    const response = await Api.post('/auth/validate', {
      token: await getTokenStorage(),
    });
    return response.data;
  } catch (error) {
    console.log('Errou?', error);

    return undefined;
  }
};

type LoginResponseType = {
  error: string;
  token: string;
  user: IUser;
};

export type ParamsLogin = {
  cpf: string;
  password: string;
};

export const loginRequest = async ({
  cpf,
  password,
}: ParamsLogin): Promise<LoginResponseType | undefined> => {
  try {
    const {data} = await Api.post('/auth/login', {
      cpf,
      password,
    });
    return data;
  } catch (error) {
    const {message} = error as AxiosError;
    throw new Error(message);
  }
};

export type ParamsRegister = {
  name: string;
  cpf: string;
  email: string;
  password: string;
  password_confirm: string;
};

export const registerRequest = async ({
  name,
  cpf,
  email,
  password,
  password_confirm,
}: ParamsRegister): Promise<LoginResponseType | undefined> => {
  try {
    const {data} = await Api.post('/auth/register', {
      name,
      cpf,
      email,
      password,
      password_confirm,
    });
    return data;
  } catch (error) {
    const {message} = error as AxiosError;
    throw new Error(message);
  }
};

export const serviceApi = {
  validateTokenRequest,
  loginRequest,
  registerRequest,
};
