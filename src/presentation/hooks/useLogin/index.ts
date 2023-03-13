import {Alert} from 'react-native';
import {KeysLocalStorage} from '@src/infra/utils/keysLocalStorage';
import {storageLocal} from '@src/infra/utils/storageLocal';
import * as RootNavigation from '@src/infra/navigation/navigationRef';
import {serviceApi} from '@src/infra/services/api';
import {useAppStore} from '@src/infra/store/useAppStore';

export const useLogin = (cpf: string, password: string) => {
  const setUser = useAppStore(state => state.setUser);

  const handleLogin = async () => {
    try {
      await serviceApi.loginRequest({cpf, password}).then(async res => {
        if (res?.error !== '') {
          Alert.alert('Atenção!', 'Houve um erro: \n' + res?.error);
          return;
        }
        await storageLocal.setItem(KeysLocalStorage.TOKEN, res.token);
        const get = await storageLocal.getItem(KeysLocalStorage.TOKEN);

        setUser(res.user);
        return RootNavigation.navigationRef.navigate('Profile');
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
