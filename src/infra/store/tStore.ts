import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createJSONStorage, persist} from 'zustand/middleware';

type FishType = {
  fishes: number;
  addFishes: () => void;
};
export const useFishStore = create<FishType>()(
  persist(
    (set, get) => ({
      fishes: 0,
      addFishes: () => set({fishes: 10}),
    }),
    {
      name: 'food-storage', // unique name
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
