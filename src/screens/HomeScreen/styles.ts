// HomeScreen/styles.ts
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: ${props => props.theme.spacing.l}px;
  background: ${props => props.theme.colors.background};
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-size: 32px;
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.l}px;
  text-align: center;
`;

export const Subtitle = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 18px;
  margin-bottom: ${props => props.theme.spacing.xl}px;
  text-align: center;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  gap: ${props => props.theme.spacing.m}px;
`;

export const StyledButton = styled.Pressable`
  background-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.m}px;
  border-radius: ${props => props.theme.borderRadius.m}px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  font-weight: 600;
`;
