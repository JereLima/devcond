import React from 'react';
import {SafeAreaViewProps} from 'react-native-safe-area-context';

import * as S from './styles';

type MyScreenProps = {
  children: React.ReactNode;
} & SafeAreaViewProps;

const MyScreen: React.FC<MyScreenProps> = ({children}) => {
  return <S.Container>{children}</S.Container>;
};

export default MyScreen;
