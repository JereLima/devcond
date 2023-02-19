import {createStore} from 'zustand/vanilla';
import {createJSONStorage, devtools, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface IAppStore {
  token: string;
  user: IUser;
  setToken: (token: string) => void;
  setUser: (user: IUser) => void;
}

export type IUser = {
  admin: number;
  cpf: number;
  email: string;
  id: number;
  name: string;
  properties: IProperty[];
};

type IProperty = {
  id: number;
  name: string;
};

export const useAppStore = createStore<IAppStore>()(
  devtools(
    persist(
      set => ({
        user: {} as IUser,
        token: '',
        setToken(token) {
          set({token: token});
        },
        setUser(user) {
          set({user: user});
        },
      }),
      {
        name: 'app-storage',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);
