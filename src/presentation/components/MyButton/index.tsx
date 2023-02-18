import React, {forwardRef} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native/types';

import * as S from './styles';

type Ref = TouchableOpacity;

type MyButtonProps = {
  bgColor?: string;
  title: string;
} & TouchableOpacityProps;

export const MyButton = forwardRef<Ref, MyButtonProps>(
  ({bgColor, title, ...props}, ref) => (
    <S.Button activeOpacity={0.6} ref={ref} {...props}>
      <S.Text>{title}</S.Text>
    </S.Button>
  ),
);

export const MyButtonOutLined = forwardRef<Ref, MyButtonProps>(
  ({bgColor, title, ...props}, ref) => (
    <S.ButtonOutlined activeOpacity={0.6} ref={ref} {...props}>
      <S.TextOutLined>{title}</S.TextOutLined>
    </S.ButtonOutlined>
  ),
);
