import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.background};
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-size: 24px;
  margin-bottom: ${props => props.theme.spacing.l}px;
`;
