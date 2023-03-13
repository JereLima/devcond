import * as React from 'react';
import {navigationRef} from './navigationRef';
import {RootStackParamList} from './types';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  LoginScreen,
  PreloadScreen,
  ProfileScreen,
  RegisterScreen,
  SelectPropertyScreen,
  WallScreen,
} from '@src/presentation/screens';
import Wall from '@src/presentation/screens/Wall';

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
      <Stack.Screen name="Drawer" component={MyDrawer} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator<RootStackParamList>();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Wall" component={WallScreen} />
    </Drawer.Navigator>
  );
}
