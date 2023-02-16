import {create} from 'zustand';
import {createJSONStorage, devtools, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IAppStore {
  token: string;
  user: IUser;
  property: IProperty;
  setToken: (token: string) => void;
  setUser: (user: IUser) => void;
  setProperty: (token: IProperty) => void;
}

type IUser = {
  name: string;
  email: string;
  photoUrl: string;
};

type IProperty = {
  unity: string;
  address: string;
};

export const useAppStore = create<IAppStore>()(
  devtools(
    persist(
      set => ({
        user: {
          email: 'foo@bar.com',
          name: 'bar',
          photoUrl: 'http://',
        },
        token: '$54s4s4s4',
        property: {address: 'rua tilango', unity: '12251'} as IProperty,
        setToken(token) {
          set({token: token});
        },
        setProperty(property) {
          set({property: property});
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
