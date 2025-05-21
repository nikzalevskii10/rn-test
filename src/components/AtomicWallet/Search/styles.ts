import {StyleSheet} from 'react-native';
import {atomicWalletTheme} from '../../../theme/atomicWallet';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: atomicWalletTheme.colors.background,
  },
  input: {
    backgroundColor: '#2A3653',
    borderRadius: 8,
    padding: 12,
    color: atomicWalletTheme.colors.text,
  },
});
