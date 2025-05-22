import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation/AppNavigator';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export const StakingScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Staking Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.backButton}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};
