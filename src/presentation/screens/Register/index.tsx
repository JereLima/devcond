import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {RegisterScreenProps} from '../../../infra/navigation/types';
import MyHeader from '../../components/MyHeader';
import MyScreen from '../../components/MyScreen';

const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation, route}) => {
  return (
    <MyScreen>
      <Container>
        <MyHeader title="Registrar-se" />
      </Container>
    </MyScreen>
  );
};

export default RegisterScreen;

export const Container = styled.View`
  flex: 1;
`;
