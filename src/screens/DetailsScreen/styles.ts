import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const Content = styled.View`
  padding: ${props => props.theme.spacing.l}px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 300px;
  margin-bottom: ${props => props.theme.spacing.l}px;
  border-radius: ${props => props.theme.borderRadius.l}px;
  overflow: hidden;
  ${props => props.theme.shadows.m}
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.surface};
`;

export const Title = styled.Text`
  font-size: ${props => props.theme.typography.fontSize.xxl}px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.m}px;
`;

export const Price = styled.Text`
  font-size: ${props => props.theme.typography.fontSize.xl}px;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.m}px;
`;

export const Category = styled.Text`
  font-size: ${props => props.theme.typography.fontSize.m}px;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.s}px;
  text-transform: capitalize;
`;

export const Description = styled.Text`
  font-size: ${props => props.theme.typography.fontSize.m}px;
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.l}px;
  line-height: ${props => props.theme.typography.lineHeight.m}px;
`;

export const InfoContainer = styled.View`
  background-color: ${props => props.theme.colors.card};
  padding: ${props => props.theme.spacing.m}px;
  border-radius: ${props => props.theme.borderRadius.m}px;
  margin-bottom: ${props => props.theme.spacing.l}px;
  ${props => props.theme.shadows.s}
`;

export const InfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing.s}px;
`;

export const InfoLabel = styled.Text`
  font-size: ${props => props.theme.typography.fontSize.s}px;
  color: ${props => props.theme.colors.textSecondary};
`;

export const InfoValue = styled.Text`
  font-size: ${props => props.theme.typography.fontSize.s}px;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
`;

export const ButtonContainer = styled.View`
  margin-top: ${props => props.theme.spacing.xl}px;
  width: 100%;
`;

export const StyledButton = styled.Pressable`
  background-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.m}px;
  border-radius: ${props => props.theme.borderRadius.m}px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.typography.fontSize.m}px;
  font-weight: 600;
`;
