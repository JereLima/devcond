import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {LoginScreen} from '../../presentation/screens';
import ProfileScreen from '../../presentation/screens/Profile';
import RegisterScreen from '../../presentation/screens/Register';
import {RootStackParamList} from './types';

export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
