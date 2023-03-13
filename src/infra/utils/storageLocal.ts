import AsyncStorage from '@react-native-async-storage/async-storage';
import {KeysLocalStorage} from './keysLocalStorage';

const setItem = async (key: KeysLocalStorage, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(`error ao salvar item do Storage => chave: ${key}`, error);
  }
};

const getItem = async (key: KeysLocalStorage) => {
  try {
    const response = await AsyncStorage.getItem(key);
    return response;
  } catch (error) {
    console.log(`error ao buscar item do Storage => chave: ${key}`, error);
  }
};

const removeItem = async (key: KeysLocalStorage) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(`error ao remover item do Storage => chave: ${key}`, error);
  }
};

export const storageLocal = {
  setItem,
  getItem,
  removeItem,
};
