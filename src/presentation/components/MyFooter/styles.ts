import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {Keyboard} from 'react-native';

type StyleProps = {
  keyboard: boolean;
};

export const Container = styled.View<StyleProps>`
  width: 100%;
  padding: ${({keyboard}) => (keyboard ? 0 : 16)}px;
`;

export const ContainerIcon = styled.TouchableOpacity`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  align-items: center;
  justify-content: center;
`;

export const TitleHeader = styled.Text`
  font-size: ${({theme}) => theme.sizes.F18}px;
  color: ${({theme}) => theme.colors.text_soft};
  padding-left: ${RFValue(16)}px;
`;
