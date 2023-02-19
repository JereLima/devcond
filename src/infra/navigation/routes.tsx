import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {LoginScreen} from '../../presentation/screens';
import PreloadScreen from '../../presentation/screens/Preload';
import ProfileScreen from '../../presentation/screens/Profile';
import RegisterScreen from '../../presentation/screens/Register';
import {navigationRef} from './navigationRef';
import {RootStackParamList} from './types';

export default function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackRoutes />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Preload" component={PreloadScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
