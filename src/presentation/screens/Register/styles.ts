import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: ${({theme}) => theme.sizes.paddingScreen}px;
`;

export const KeyboardAvoiding = styled.KeyboardAvoidingView`
  flex: 1;
`;
