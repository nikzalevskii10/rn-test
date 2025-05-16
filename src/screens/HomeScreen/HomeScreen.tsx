import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {Button, View} from 'react-native';
import {Title} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({navigation}: Props) {
  return (
    <View>
      <Title>Home Screen</Title>
      <Title>Hello World</Title>
      <Button
        title="Go To Details"
        onPress={() => navigation.navigate('Details', {})}
      />
      <Button title="Go To List" onPress={() => navigation.navigate('List')} />
    </View>
  );
}
