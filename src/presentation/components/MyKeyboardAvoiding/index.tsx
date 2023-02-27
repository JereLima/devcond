import React from 'react';
import {KeyboardAvoidingViewProps} from 'react-native';
import {Platform} from 'react-native';
import {SafeAreaViewProps} from 'react-native-safe-area-context';

import * as S from './styles';

type MyKeyboardAvoidingProps = {
  children: React.ReactNode;
} & KeyboardAvoidingViewProps;

const MyKeyboardAvoiding: React.FC<MyKeyboardAvoidingProps> = ({children}) => {
  return (
    <S.Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {children}
    </S.Container>
  );
};

export default MyKeyboardAvoiding;
