import React, {useState} from 'react';
import {RegisterScreenProps} from '@src/infra/navigation/types';
import {Alert, Platform} from 'react-native';

import * as S from './styles';
import MyInput from '@src/presentation/components/MyInput';
import {
  MyFooter,
  MyHeader,
  MyScreen,
  MySpacer,
} from '@src/presentation/components';
import MyKeyboardAvoiding from '@src/presentation/components/MyKeyboardAvoiding';
import {useRegister} from '@src/presentation/hooks/useRegister';

const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {handlerRegister} = useRegister({
    name,
    cpf,
    password,
    password_confirm: confirmPassword,
    email,
  });

  const handlerRegistration = () => {
    if (!name && !password && !confirmPassword && !email && !cpf) {
      Alert.alert('Existem campos vazios!');
      return;
    }

    handlerRegister();
  };

  return (
    <MyScreen>
      <MyHeader title="Registrar-se" />
      <MyKeyboardAvoiding
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <S.Container>
          <MyInput placeholder="Nome" onChangeText={setName} />
          <MySpacer />
          <MyInput placeholder="CPF" onChangeText={setCpf} />
          <MySpacer />
          <MyInput placeholder="Email" onChangeText={setEmail} />
          <MySpacer />
          <MyInput placeholder="Senha" onChangeText={setPassword} />
          <MySpacer />
          <MyInput
            placeholder="Confirme a senha"
            onChangeText={setConfirmPassword}
          />
          <MySpacer />
        </S.Container>
        <MyFooter onPress={handlerRegistration} title="Cadastrar" />
      </MyKeyboardAvoiding>
    </MyScreen>
  );
};

export default RegisterScreen;
