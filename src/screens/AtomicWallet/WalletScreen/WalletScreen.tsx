import {SafeAreaView, StatusBar, View} from 'react-native';
import {styles} from './styles';
import {Header} from '../../../components/AtomicWallet/Header/Header';
import {Search} from '../../../components/AtomicWallet/Search/Search';
import {HistoryIcon} from '../../../ui-kit/atomic-wallet/icons/HistoryIcon';
import {SearchIcon} from '../../../ui-kit/atomic-wallet/icons/SearchIcon';
import {BuyIcon} from '../../../ui-kit/atomic-wallet/icons/BuyIcon';
import {SwapIcon} from '../../../ui-kit/atomic-wallet/icons/SwapIcon';
import {StakingIcon} from '../../../ui-kit/atomic-wallet/icons/StakingIcon';
import {MoreIcon} from '../../../ui-kit/atomic-wallet/icons/MoreIcon';
import {WalletIcon} from '../../../ui-kit/atomic-wallet/icons/WalletIcon';
import {BalanceInHeaderIcon} from '../../../ui-kit/atomic-wallet/icons/BalanceInHeaderIcon';

export const WalletScreen = () => {
  console.log('WalletScreen');
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1F2843" />
      <View style={styles.container}>
        <Header />
        <Search />
        <HistoryIcon />
        <SearchIcon />
        <BuyIcon />
        <SwapIcon />
        <StakingIcon />
        <MoreIcon />
        <WalletIcon />
        <BalanceInHeaderIcon />
      </View>
    </SafeAreaView>
  );
};
