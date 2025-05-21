import {StyleSheet} from 'react-native';
import {atomicWalletTheme} from '../../../theme/atomicWallet';

export const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: atomicWalletTheme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  balance: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
