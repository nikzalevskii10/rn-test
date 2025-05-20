import {StyleSheet} from 'react-native';
import {AppTheme} from '../../theme';

export const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      padding: theme.spacing.l,
    },
    imageContainer: {
      width: '100%',
      height: 300,
      marginBottom: theme.spacing.l,
      borderRadius: theme.borderRadius.l,
      overflow: 'hidden',
      ...theme.shadows.m,
    },
    productImage: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.colors.surface,
    },
    title: {
      fontSize: theme.typography.fontSize.xxl,
      fontWeight: '700',
      color: theme.colors.text,
      marginBottom: theme.spacing.m,
    },
    price: {
      fontSize: theme.typography.fontSize.xl,
      fontWeight: '700',
      color: theme.colors.primary,
      marginBottom: theme.spacing.m,
    },
    category: {
      fontSize: theme.typography.fontSize.m,
      color: theme.colors.textSecondary,
      marginBottom: theme.spacing.s,
      textTransform: 'capitalize',
    },
    description: {
      fontSize: theme.typography.fontSize.m,
      color: theme.colors.text,
      marginBottom: theme.spacing.l,
      lineHeight: theme.typography.lineHeight.m,
    },
    infoContainer: {
      backgroundColor: theme.colors.card,
      padding: theme.spacing.m,
      borderRadius: theme.borderRadius.m,
      marginBottom: theme.spacing.l,
      ...theme.shadows.m,
    },
    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: theme.spacing.s,
    },
    infoLabel: {
      fontSize: theme.typography.fontSize.s,
      color: theme.colors.textSecondary,
    },
    infoValue: {
      fontSize: theme.typography.fontSize.s,
      color: theme.colors.text,
      fontWeight: '500',
    },
    buttonContainer: {
      marginTop: theme.spacing.xl,
      width: '100%',
    },
    button: {
      backgroundColor: theme.colors.primary,
      padding: theme.spacing.m,
      borderRadius: theme.borderRadius.m,
      alignItems: 'center' as const,
    },
    buttonText: {
      color: theme.colors.white,
      fontSize: theme.typography.fontSize.m,
      fontWeight: '600',
    },
  });
