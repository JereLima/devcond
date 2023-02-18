import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.bg_input};
  min-height: 46px;
  justify-content: center;
  border-radius: ${({theme}) => theme.sizes.radius}px;
`;

export const Input = styled.TextInput`
  border-radius: ${({theme}) => theme.sizes.radius}px;
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.sizes.F16}px;
  padding: 0px 16px;
`;
