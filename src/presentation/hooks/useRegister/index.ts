import {Alert} from 'react-native';
import * as RootNavigation from '../../../infra/navigation/navigationRef';
import {ParamsRegister, serviceApi} from '../../../infra/services/api';
import {useAppStore} from '../../../infra/store/useAppStore';

export const useRegister = ({
  password_confirm,
  cpf,
  email,
  name,
  password,
}: ParamsRegister) => {
  const setToken = useAppStore.getState().setToken;
  const setUser = useAppStore.getState().setUser;

  const handlerRegister = async () => {
    try {
      await serviceApi
        .registerRequest({password_confirm, cpf, email, name, password})
        .then(res => {
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
    handlerRegister,
  };
};
