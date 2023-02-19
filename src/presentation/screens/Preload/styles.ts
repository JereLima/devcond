import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: ${({theme}) => theme.sizes.paddingScreen}px;
`;
