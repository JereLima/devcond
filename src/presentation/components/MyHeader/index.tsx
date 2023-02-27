import React from 'react';
import {ArrowBendUpLeft} from 'phosphor-react-native';
import {BackHandler, View, ViewProps} from 'react-native';

import * as S from './styles';
import {useNavigation} from '@react-navigation/native';

type MyHeaderProps = {
  title: string;
} & ViewProps;

const MyHeader: React.FC<MyHeaderProps> = ({title}) => {
  const navigation = useNavigation();
  const goBack = () => {
    if (navigation.getState().routes.length === 0) {
      navigation.goBack();
    } else {
      BackHandler.exitApp(); // a previous screen does exist
    }
  };

  return (
    <S.Container>
      <S.ContainerIcon onPress={goBack}>
        <ArrowBendUpLeft size={32} weight="thin" />
      </S.ContainerIcon>
      <S.TitleHeader>{title}</S.TitleHeader>
    </S.Container>
  );
};

export default MyHeader;
