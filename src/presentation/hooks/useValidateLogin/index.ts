import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigationContainerRef} from '@react-navigation/native';
import {useEffect} from 'react';
import {Alert} from 'react-native';
import * as RootNavigation from '../../../infra/navigation/navigationRef';
import {serviceApi} from '../../../infra/services/api';
import {useAppStore} from '../../../infra/store/useAppStore';

export const useValidateLogin = () => {
  const validate = async () => {
    try {
      await serviceApi.validateTokenRequest().then(res => {
        if (res?.error === '') {
          return RootNavigation.navigationRef.reset({
            index: 0,
            routes: [{name: 'Profile'}],
          });
        } else {
          Alert.alert('Atenção!', 'Houve um erro: \n' + res?.error, [
            {
              text: 'Fazer login novamente',
              onPress: () =>
                RootNavigation.navigationRef.reset({
                  index: 0,
                  routes: [{name: 'Login'}],
                }),
            },
          ]);
        }
      });
    } catch (error) {
      Alert.alert(
        'Atenção!',
        'Houve um erro com o servidor.\nTente novamente mais tarde',
        [
          {
            text: 'Fazer login novamente',
            onPress: () => RootNavigation.navigationRef.navigate('Login'),
          },
        ],
      );
    }
  };

  useEffect(() => {
    validate();
  }, []);
};
