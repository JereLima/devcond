import React from 'react';
import {RegisterScreenProps} from '@src/infra/navigation/types';

import * as S from './styles';
import MyInput from '@src/presentation/components/MyInput';
import {
  MyFooter,
  MyHeader,
  MyScreen,
  MySpacer,
} from '@src/presentation/components';

const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation, route}) => {
  return (
    <MyScreen>
      <MyHeader title="Registrar-se" />
      <S.Container>
        <MyInput placeholder="Teste1" />
        <MySpacer />
        <MyInput placeholder="Teste1" />
        <MySpacer />
        <MyInput placeholder="Teste1" />
        <MySpacer />
        <MyInput placeholder="Teste1" />
        <MySpacer />
      </S.Container>
      <MyFooter onPress={() => {}} title="sasas" />
    </MyScreen>
  );
};

export default RegisterScreen;
