import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  padding: ${({theme}) => theme.sizes.paddingScreen}px;
`;

export const ContainerText = styled.View`
  align-items: center;
`;
export const CardProperty = styled(TouchableOpacity)`
  width: 100%;
  padding: 10px;
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: ${({theme}) => theme.sizes.radius}px;
`;
