import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {LoginProps} from '../../../infra/navigation/types';

const LoginScreen: React.FC<LoginProps> = ({navigation, route}) => {
  return (
    <SafeArea>
      <Container />
    </SafeArea>
  );
};

export default LoginScreen;

export const SafeArea = styled(SafeAreaView)`
  flex: 2;
  background-color: ${({theme}) => theme.colors.shape_dark};
`;

export const Container = styled.View`
  flex: 2;
  background-color: ${({theme}) => theme.colors.shape_dark};
`;
