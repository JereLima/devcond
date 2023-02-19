import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {PreloadScreenProps} from '@src/infra/navigation/types';
import {serviceApi} from '@src/infra/services/api';
import {MyScreen} from '@src/presentation/components';

import * as S from './styles';

const PreloadScreen: React.FC<PreloadScreenProps> = ({navigation, route}) => {
  const checkLogin = async () => {
    const login = await serviceApi.validateTokenRequest();
    if (login) {
      navigation.reset({
        index: 1,
        routes: [{name: 'Login'}],
      });
    } else {
      navigation.reset({
        index: 1,
        routes: [{name: 'Login'}],
      });
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <MyScreen>
      <S.Container>
        <ActivityIndicator size="large" />
      </S.Container>
    </MyScreen>
  );
};

export default PreloadScreen;
