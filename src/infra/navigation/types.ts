import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Profile: undefined;
  Preload: undefined;
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
