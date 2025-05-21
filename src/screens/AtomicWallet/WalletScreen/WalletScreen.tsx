import {SafeAreaView, StatusBar, View} from 'react-native';
import {styles} from './styles';
import {Header} from '../../../components/AtomicWallet/Header/Header';
import {Search} from '../../../components/AtomicWallet/Search/Search';

export const WalletScreen = () => {
  console.log('WalletScreen');
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1F2843" />
      <View style={styles.container}>
        <Header />
        <Search />
      </View>
    </SafeAreaView>
  );
};
