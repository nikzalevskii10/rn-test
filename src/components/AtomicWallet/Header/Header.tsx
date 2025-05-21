import {Text, View} from 'react-native';
import {styles} from './styles';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.balance}>334.44 USD</Text>
    </View>
  );
};
