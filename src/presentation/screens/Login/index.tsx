import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {LoginScreenProps} from '../../../infra/navigation/types';
import {useAppStore} from '../../../infra/store/useAppStore';
import {Text} from 'react-native';

const LoginScreen: React.FC<LoginScreenProps> = ({navigation, route}) => {
  const user = useAppStore().user;
  const property = useAppStore().property;
  const token = useAppStore().token;

  return (
    <SafeArea>
      <Container>
        <Text>{user.email}</Text>
        <Text>{user.name}</Text>
        <Text>{user.photoUrl}</Text>
        <Text>{token}</Text>
        <Text>{property.unity}</Text>
        <Text>{property.address}</Text>
      </Container>
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
  background-color: ${({theme}) => theme.colors.shape};
`;
