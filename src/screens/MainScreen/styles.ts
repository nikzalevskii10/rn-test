import styled from 'styled-components/native';

export const Screen = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const ListContent = styled.View`
  padding: ${props => props.theme.spacing.m}px;
`;

export const ItemContainer = styled.Pressable`
  border-radius: ${props => props.theme.borderRadius.m}px;
  overflow: hidden;
  margin-bottom: ${props => props.theme.spacing.s}px;
`;

export const Item = styled.View`
  flex-direction: row;
  background-color: ${props => props.theme.colors.card};
  border-radius: ${props => props.theme.borderRadius.m}px;
  shadow-color: ${props => props.theme.shadows.m.shadowColor};
  shadow-offset: ${props => props.theme.shadows.m.shadowOffset.width}px
    ${props => props.theme.shadows.m.shadowOffset.height}px;
  shadow-opacity: ${props => props.theme.shadows.m.shadowOpacity};
  shadow-radius: ${props => props.theme.shadows.m.shadowRadius}px;
  elevation: ${props => props.theme.shadows.m.elevation};
`;

export const ItemImage = styled.Image`
  width: 100px;
  height: 100px;
  background-color: ${props => props.theme.colors.surface};
`;

export const ItemContent = styled.View`
  flex: 1;
  padding: ${props => props.theme.spacing.m}px;
`;

export const ItemTitle = styled.Text`
  font-size: ${props => props.theme.typography.fontSize.m}px;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.xs}px;
`;

export const ItemCategory = styled.Text`
  font-size: ${props => props.theme.typography.fontSize.s}px;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.s}px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.Text`
  font-size: ${props => props.theme.typography.fontSize.m}px;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`;

export const Stock = styled.Text`
  font-size: ${props => props.theme.typography.fontSize.xs}px;
  color: ${props => props.theme.colors.textSecondary};
`;

export const Separator = styled.View`
  height: ${props => props.theme.spacing.s}px;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing.l}px;
`;

export const EmptyText = styled.Text`
  font-size: ${props => props.theme.typography.fontSize.m}px;
  color: ${props => props.theme.colors.textSecondary};
`;
