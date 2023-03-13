import * as React from 'react';
import {navigationRef} from './navigationRef';
import {RootStackParamList} from './types';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoginScreen,
  PreloadScreen,
  ProfileScreen,
  RegisterScreen,
  SelectPropertyScreen,
} from '@src/presentation/screens';

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
      <Stack.Screen name="SelectProperty" component={SelectPropertyScreen} />
    </Stack.Navigator>
  );
};
