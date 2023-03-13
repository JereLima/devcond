import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: ${({theme}) => theme.sizes.F18}px;
  color: ${({theme}) => theme.colors.text};
`;
