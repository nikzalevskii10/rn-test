import {StyleSheet} from 'react-native';
import {AppTheme} from '../../theme';

export const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    listContent: {
      padding: theme.spacing.m,
    },
    itemContainer: {
      borderRadius: theme.borderRadius.m,
      overflow: 'hidden',
      marginBottom: theme.spacing.s,
    },
    item: {
      flexDirection: 'row',
      backgroundColor: theme.colors.card,
      borderRadius: theme.borderRadius.m,
      ...theme.shadows.m,
    },
    itemImage: {
      width: 100,
      height: 100,
      backgroundColor: theme.colors.surface,
      resizeMode: 'cover' as const,
    },
    itemContent: {
      flex: 1,
      padding: theme.spacing.m,
    },
    itemTitle: {
      fontSize: theme.typography.fontSize.m,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
    },
    itemCategory: {
      fontSize: theme.typography.fontSize.s,
      color: theme.colors.textSecondary,
      marginBottom: theme.spacing.s,
    },
    priceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    price: {
      fontSize: theme.typography.fontSize.m,
      fontWeight: '700',
      color: theme.colors.primary,
    },
    stock: {
      fontSize: theme.typography.fontSize.xs,
      color: theme.colors.textSecondary,
    },
    separator: {
      height: theme.spacing.s,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing.l,
    },
    emptyText: {
      fontSize: theme.typography.fontSize.m,
      color: theme.colors.textSecondary,
    },
  });
