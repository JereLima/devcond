import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigationContainerRef} from '@react-navigation/native';
import {Alert} from 'react-native';
import * as RootNavigation from '../../../infra/navigation/navigationRef';
import {serviceApi} from '../../../infra/services/api';
import {useAppStore} from '../../../infra/store/useAppStore';

export const useLogin = (cpf: string, password: string) => {
  const setToken = useAppStore(state => state.setToken);
  const setUser = useAppStore(state => state.setUser);

  const setTokenStorage = async (token: string) => {
    try {
      await AsyncStorage.setItem('@token', token);
    } catch (e) {
      console.warn('error setting token storage');
    }
  };

  const handleLogin = async () => {
    try {
      await serviceApi.loginRequest({cpf, password}).then(res => {
        if (res?.error === '') {
          setToken(res.token);
          setUser(res.user);
          setTokenStorage(res.token);
          return RootNavigation.navigationRef.navigate('Profile');
        } else {
          Alert.alert('Atenção!', 'Houve um erro: \n' + res?.error);
        }
      });
    } catch (error) {
      Alert.alert(
        'Atenção!',
        'Houve um erro com o servidor.\nTente novamente mais tarde',
      );
    }
  };

  return {
    handleLogin,
  };
};
