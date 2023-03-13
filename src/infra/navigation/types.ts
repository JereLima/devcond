import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Profile: undefined;
  Preload: undefined;
  SelectProperty: undefined;
  //Drawer
  Drawer: undefined;
  Wall: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;

export type RegisterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Register'
>;

export type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Profile'
>;

export type PreloadScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Preload'
>;

export type SelectPropertyProps = NativeStackScreenProps<
  RootStackParamList,
  'SelectProperty'
>;

export type WallScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Wall'
>;
