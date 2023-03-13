import {useState} from 'react';
import {Alert} from 'react-native';
import {KeysLocalStorage} from '@src/infra/utils/keysLocalStorage';
import {storageLocal} from '@src/infra/utils/storageLocal';
import * as RootNavigation from '@src/infra/navigation/navigationRef';
import {serviceApi} from '@src/infra/services/api';

export const useLogout = () => {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await serviceApi.logoutRequest();
      await storageLocal.removeItem(KeysLocalStorage.TOKEN);
      return RootNavigation.navigationRef.navigate('Login');
    } catch (error) {
      Alert.alert(
        'Atenção!',
        'Houve um erro com o servidor.\nTente novamente mais tarde',
      );
    }
  };

  return {
    handleLogout,
    loading,
  };
};
