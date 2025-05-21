import {TextInput, View} from 'react-native';
import {styles} from './styles';
import {atomicWalletTheme} from '../../../theme/atomicWallet';

export const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor={atomicWalletTheme.colors.textSecondary}
      />
    </View>
  );
};
