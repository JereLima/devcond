import {create, createStore} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createJSONStorage, persist} from 'zustand/middleware';
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

export const useAppStore = create<IAppStore>()(
  persist(
    set => ({
      user: {} as IUser,
      token: '',
      setToken(token) {
        console.log(token);
        set({token: token});
      },
      setUser(user) {
        console.log(user);
        set({user: user});
      },
    }),
    {
      name: 'app-storage-dev-cond',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
