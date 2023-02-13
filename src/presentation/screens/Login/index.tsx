import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LoginProps} from '../../../infra/navigation/types';

const LoginScreen: React.FC<LoginProps> = ({navigation, route}) => {
  // eslint-disable-next-line react-native/no-inline-styles
  return <SafeAreaView style={{flex: 1, backgroundColor: '#f3f3f3'}} />;
};

export default LoginScreen;
