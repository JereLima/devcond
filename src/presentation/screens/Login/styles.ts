import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components/native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export const KeyboardAvoiding = styled(KeyboardAvoidingView)`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: ${({theme}) => theme.sizes.paddingScreen}px;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 120px;
`;

export const ContainerLogo = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const PrivacyPolicies = styled.Text`
  color: ${({theme}) => theme.colors.text_soft};
  font-size: 14px;
  align-self: center;
  padding: 8px;
`;
