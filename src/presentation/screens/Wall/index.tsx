import {PreloadScreenProps, WallScreenProps} from '@src/infra/navigation/types';
import {MyScreen} from '@src/presentation/components';
import React from 'react';
import {ActivityIndicator} from 'react-native';

import {useValidateLogin} from '@src/presentation/hooks/useValidateLogin';
import * as S from './styles';

const WallScreen: React.FC<WallScreenProps> = ({navigation, route}) => {
  return (
    <MyScreen>
      <S.Container>
        <ActivityIndicator size="large" />
      </S.Container>
    </MyScreen>
  );
};

export default WallScreen;
