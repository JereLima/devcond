import React from 'react';
import {View, ViewProps} from 'react-native';
import {SafeAreaViewProps} from 'react-native-safe-area-context';

import * as S from './styles';

type MySpacerProps = {
  height?: number;
} & ViewProps;

const MySpacer: React.FC<MySpacerProps> = ({height}) => {
  return <S.Container height={height} />;
};

export default MySpacer;
