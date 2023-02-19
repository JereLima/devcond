import {
  useNavigation,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {Alert} from 'react-native';
import {
  LoginScreenProps,
  RootStackParamList,
} from '../../../infra/navigation/types';
import {serviceApi} from '../../../infra/services/api';
import * as RootNavigation from '../../../infra/navigation/navigationRef';
import {useAppStore} from '../../../infra/store/useAppStore';

export const useLogin = (cpf: string, password: string) => {
  const navigationRef = useNavigationContainerRef();
  const setToken = useAppStore.getState().setToken;
  const setUser = useAppStore.getState().setUser;

  const handleLogin = async () => {
    try {
      await serviceApi.loginRequest({cpf, password}).then(res => {
        if (res?.error === '') {
          setToken(res.token);
          setUser(res.user);
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
