import styled from 'styled-components/native';

type StyleProps = {
  height?: number;
};

export const Container = styled.View<StyleProps>`
  height: ${({height}) => height || 10}px;
  width: 100%;
`;
