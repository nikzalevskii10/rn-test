import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SettingsIcon} from '../ui-kit/atomic-wallet/icons/SettingsIcon';
import {WalletScreen} from '../screens/AtomicWallet/WalletScreen/WalletScreen';
import {StakingScreen} from '../screens/AtomicWallet/StakingScreen/StakingScreen';

const BuyScreen = () => null;
const SwapScreen = () => null;
const MoreScreen = () => null;

const TabBarIcon = ({
  focused: _focused,
  color,
  size: _size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  return <SettingsIcon color={color} />;
};

const Tab = createBottomTabNavigator();

export const AtomicWalletNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1F2843',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#3C78E0',
        tabBarInactiveTintColor: '#8A92A5',
      }}>
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: TabBarIcon,
        }}
      />
      <Tab.Screen
        name="Buy"
        component={BuyScreen}
        options={{
          tabBarIcon: TabBarIcon,
        }}
      />
      <Tab.Screen
        name="Swap"
        component={SwapScreen}
        options={{
          tabBarIcon: TabBarIcon,
        }}
      />
      <Tab.Screen
        name="Staking"
        component={StakingScreen}
        options={{
          tabBarIcon: TabBarIcon,
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: TabBarIcon,
        }}
      />
    </Tab.Navigator>
  );
};
