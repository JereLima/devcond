import React, {forwardRef} from 'react';
import {ReactNode} from 'react';
import {
  TextInput,
  TextInputComponent,
  TextInputProps,
} from 'react-native/types';

import * as S from './styles';

export type Ref = TextInput;

const MyInput = forwardRef<Ref, TextInputProps>(({...props}, ref) => (
  <S.Container>
    <S.Input ref={ref} {...props} />
  </S.Container>
));

export default MyInput;
