import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

/*
  Default
*/

type Default = {
  bgColor?: string;
  color?: string;
  fontSize?: number;
  bordersRadius?: boolean;
};

export const Button = styled(TouchableOpacity)<Default>`
  background-color: ${({bgColor, theme}) => bgColor || theme.colors.main};
  align-items: center;
  justify-content: center;
  min-height: 46px;
  border-radius: ${({theme, bordersRadius}) =>
    bordersRadius ? 0 : theme.sizes.radius}px;
`;

export const Text = styled.Text<Default>`
  color: ${({color, theme}) => color || theme.colors.text_button};
  font-size: ${({theme}) => theme.sizes.F16}px;
`;

/*
  Outlined
*/

type Outlined = {
  bgColor?: string;
  color?: string;
  fontSize?: number;
};

export const ButtonOutlined = styled(TouchableOpacity)<Outlined>`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  min-height: 46px;
`;

export const TextOutLined = styled.Text<Outlined>`
  font-size: ${({theme}) => theme.sizes.F16}px;
  color: ${({color, theme}) => color || theme.colors.main};
`;
