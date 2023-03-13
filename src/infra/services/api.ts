import axios, {AxiosError} from 'axios';
import {IUser} from '@src/infra/store/useAppStore';
import {KeysLocalStorage} from '../utils/keysLocalStorage';
import {storageLocal} from '@src/infra/utils/storageLocal';

const baseUrl = 'https://api.b7web.com.br/devcond/api';

const Api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

Api.interceptors.request.use(
  async config => {
    const token = await storageLocal.getItem(KeysLocalStorage.TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

export const validateTokenRequest = async (): Promise<any | undefined> => {
  try {
    const token = await storageLocal.getItem(KeysLocalStorage.TOKEN);
    const response = await Api.post('/auth/validate', {
      token,
    });
    return response.data;
  } catch (error) {
    console.log('Errou?', JSON.stringify(error));
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

type LogoutResponse = {
  error: '';
};
export const logoutRequest = async (): Promise<LogoutResponse | undefined> => {
  try {
    const token = await storageLocal.getItem(KeysLocalStorage.TOKEN);
    const {data} = await Api.post('/auth/logout', {token});
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
  logoutRequest,
};
