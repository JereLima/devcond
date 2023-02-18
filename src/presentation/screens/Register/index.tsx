import React from 'react';
import {RegisterScreenProps} from '../../../infra/navigation/types';
import {MyButton} from '../../components/MyButton';
import MyFooter from '../../components/MyFooter';
import MyHeader from '../../components/MyHeader';
import MyInput from '../../components/MyInput';
import MyScreen from '../../components/MyScreen';
import MySpacer from '../../components/MySpacer';
import * as S from './styles';

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
