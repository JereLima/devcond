import React, {useRef} from 'react';
import {Alert, TextInput} from 'react-native';
import {LoginScreenProps} from '../../../infra/navigation/types';
import {Logo} from '../../assets/icons';
import {MyButton, MyButtonOutLined} from '../../components/MyButton';
import MyInput from '../../components/MyInput';
import MyScreen from '../../components/MyScreen';
import MySpacer from '../../components/MySpacer';
import * as S from './styles';

const LoginScreen: React.FC<LoginScreenProps> = ({navigation, route}) => {
  const passwordRef = useRef<TextInput | null>(null);

  const handleNavigationHome = () => {
    navigation.navigate('Profile');
  };

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
            placeholder="Email"
            onEndEditing={() => passwordRef.current?.focus()}
          />
          <MySpacer />
          <MyInput placeholder="Senha" ref={passwordRef} />
          <MySpacer />
          <MyButton
            bgColor="pink"
            title="Entrar"
            onPress={handleNavigationHome}
          />
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
