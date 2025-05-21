import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';
import MainScreen from '../screens/MainScreen/MainScreen';
import {AtomicWalletNavigator} from './AtomicWalletNavigator';

export type RootStackParamList = {
  Home: undefined;
  Details: {id?: string; title?: string};
  Main: undefined;
  AtomicWallet: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen
          name="AtomicWallet"
          component={AtomicWalletNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
