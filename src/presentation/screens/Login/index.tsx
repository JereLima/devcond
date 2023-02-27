import React, {useRef, useState} from 'react';
import * as S from './styles';
import {Alert, Text, TextInput} from 'react-native';
import {useLogin} from '@src/presentation/hooks/useLogin';
import {LoginScreenProps} from '@src/infra/navigation/types';
import {Logo} from '@src/presentation/assets/icons';
import {
  MyButton,
  MyButtonOutLined,
  MyInput,
  MyScreen,
  MySpacer,
} from '@src/presentation/components';
import {useAppStore} from '@src/infra/store/useAppStore';
import {useFishStore} from '@src/infra/store/tStore';

const LoginScreen: React.FC<LoginScreenProps> = ({navigation, route}) => {
  const passwordRef = useRef<TextInput | null>(null);
  const [cpf, setCpf] = useState('12345678911');
  const [password, setPassword] = useState('1234');
  const {handleLogin} = useLogin(cpf, password);

  const token = useAppStore(state => state.token);
  const user = useAppStore(state => state.user);

  const handleNavigationRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <MyScreen>
      <S.KeyboardAvoiding>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
        <Text>{token}</Text>

        <S.Container>
          <S.ContainerLogo>
            <S.Logo resizeMode="contain" source={Logo} />
          </S.ContainerLogo>
          <MySpacer height={50} />
          <MyInput
            placeholder="CPF"
            onEndEditing={() => passwordRef.current?.focus()}
            onChangeText={setCpf}
          />
          <MySpacer />
          <MyInput
            placeholder="Senha"
            ref={passwordRef}
            onChangeText={setPassword}
            secureTextEntry
          />
          <MySpacer />
          <MyButton bgColor="pink" title="Entrar" onPress={handleLogin} />
          <MySpacer height={30} />

          <MyButtonOutLined
            bgColor="pink"
            title="Registrar"
            onPress={handleNavigationRegister}
          />
          {/* <MySpacer height={30} /> */}
          <S.PrivacyPolicies onPress={() => addFishes()}>
            Politicas de privacidade
          </S.PrivacyPolicies>
        </S.Container>
      </S.KeyboardAvoiding>
    </MyScreen>
  );
};

export default LoginScreen;
