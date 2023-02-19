import React, {useRef, useState} from 'react';
import {Alert, TextInput} from 'react-native';
import {LoginScreenProps} from '../../../infra/navigation/types';
import {Logo} from '../../assets/icons';
import {MyButton, MyButtonOutLined} from '../../components/MyButton';
import MyInput from '../../components/MyInput';
import MyScreen from '../../components/MyScreen';
import MySpacer from '../../components/MySpacer';
import {useLogin} from '../../hooks/useLogin/useLogin';
import * as S from './styles';

const LoginScreen: React.FC<LoginScreenProps> = ({navigation, route}) => {
  const passwordRef = useRef<TextInput | null>(null);
  const [cpf, setCpf] = useState('12345678911');
  const [password, setPassword] = useState('1234');
  const {handleLogin} = useLogin(cpf, password);

  const handleNavigationRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <MyScreen>
      <S.KeyboardAvoiding>
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
          <MySpacer height={30} />
          <S.PrivacyPolicies onPress={() => Alert.alert('Teste')}>
            Politicas de privacidade
          </S.PrivacyPolicies>
        </S.Container>
      </S.KeyboardAvoiding>
    </MyScreen>
  );
};

export default LoginScreen;
