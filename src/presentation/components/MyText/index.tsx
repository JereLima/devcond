import customTheme from '@src/presentation/theme';
import React from 'react';
import {TextProps} from 'react-native';
import {ThemeContext, useTheme, withTheme} from 'styled-components/native';
import * as S from './styles';

type MyTextProps = {} & TextProps;

const MyText: React.FC<MyTextProps> = ({...rest}) => {
  const theme = useTheme();
  return <S.Text {...rest} />;
};

export default MyText;
