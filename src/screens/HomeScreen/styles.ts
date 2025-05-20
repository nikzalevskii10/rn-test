import {StyleSheet} from 'react-native';
import {AppTheme} from '../../theme';

export const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: theme.spacing.l,
      backgroundColor: theme.colors.background,
    },
    title: {
      color: theme.colors.primary,
      fontSize: 32,
      fontWeight: '700', // было 'bold'
      marginBottom: theme.spacing.l,
      textAlign: 'center',
    },
    subtitle: {
      color: theme.colors.text,
      fontSize: 18,
      marginBottom: theme.spacing.xl,
      textAlign: 'center',
    },
    buttonContainer: {
      width: '100%',
      gap: theme.spacing.m,
    },
    button: {
      backgroundColor: theme.colors.primary,
      padding: theme.spacing.m,
      borderRadius: theme.borderRadius.m,
      alignItems: 'center' as const, // добавляем as const
    },
    buttonText: {
      color: theme.colors.white,
      fontSize: 16,
      fontWeight: '600',
    },
  });
