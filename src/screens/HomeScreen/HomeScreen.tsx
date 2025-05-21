import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {createStyles} from './styles';
import {lightTheme, useTheme} from '../../theme';

const testNetworkRequest = async () => {
  console.log('Test button pressed');
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
    console.log('Making request...');
    const data = await response.json();
    console.log('Test response:', data);
  } catch (error) {
    console.error('Test error:', error);
  }
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({navigation}: Props) {
  const {toggleTheme, theme} = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.subtitle}>Welcome to our app!</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Main')}>
          <Text style={styles.buttonText}>Go To Main</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={toggleTheme}>
          <Text style={styles.buttonText}>
            Switch to {theme === lightTheme ? 'Dark' : 'Light'} Theme
          </Text>
        </Pressable>
        <Pressable style={styles.button} onPress={testNetworkRequest}>
          <Text style={styles.buttonText}>Test Network</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('AtomicWallet')}>
          <Text style={styles.buttonText}>Open Atomic Wallet</Text>
        </Pressable>
      </View>
    </View>
  );
}
