import {create, createStore} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createJSONStorage, persist} from 'zustand/middleware';
export interface IAppStore {
  //States
  token: string;
  user: IUser;
  selectedProperty: IProperty;
  //Actions
  setToken: (token: string) => void;
  setUser: (user: IUser) => void;
  setSelectedProperty: (property: IProperty) => void;
}

export type IUser = {
  admin: number;
  cpf: number;
  email: string;
  id: number;
  name: string;
  properties: IProperty[];
};

export type IProperty = {
  id: number;
  name: string;
};

export const useAppStore = create<IAppStore>()(
  persist(
    set => ({
      user: {} as IUser,
      token: '',
      selectedProperty: {} as IProperty,
      setToken(token) {
        set({token: token});
      },
      setUser(user) {
        set({user: user});
      },
      setSelectedProperty(property) {
        set({selectedProperty: property});
      },
    }),
    {
      name: 'app-storage-dev-cond',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
