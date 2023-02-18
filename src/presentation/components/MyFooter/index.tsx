import React, {useEffect, useState} from 'react';
import {Alert, Keyboard, ViewProps} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {MyButton} from '../MyButton';
import * as S from './styles';

type MyFooterButton = {
  title: string;
  onPress: () => void;
} & ViewProps;

const MyFooter: React.FC<MyFooterButton> = ({title, onPress}) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <S.Container keyboard={keyboardStatus}>
      <MyButton borderRadius={keyboardStatus} title={title} onPress={onPress} />
    </S.Container>
  );
};

export default MyFooter;
