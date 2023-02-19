import axios, {AxiosError, AxiosResponse} from 'axios';
import {IUser, useAppStore} from '../store/useAppStore';

const baseUrl = 'https://api.b7web.com.br/devcond/api';

const token = useAppStore.getState().token;

const Api = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: 'Bearer ' + token,
    'Content-Type': 'application/json',
  },
});

export const validateTokenRequest = async (): Promise<
  AxiosResponse | undefined
> => {
  try {
    const response = await Api.post('/auth/validate');
    return response.data;
  } catch (error) {
    console.log('error', error);
    return undefined;
  }
};

type LoginResponseType = {
  error: string;
  token: string;
  user: IUser;
};

type ParamsLogin = {
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

export const serviceApi = {
  validateTokenRequest,
  loginRequest,
};
