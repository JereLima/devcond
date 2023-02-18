import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type StyleProps = {
  height?: number;
};

export const Container = styled.View<StyleProps>`
  width: 100%;
  height: ${RFValue(48)}px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.colors.shape};
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
