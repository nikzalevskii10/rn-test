import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import {Button, Text, View} from 'react-native';
import {commonStyles} from '../styles/common';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({navigation}: Props) {
  return (
    <View style={commonStyles.centered}>
      <Text>Home Screen</Text>
      <Text>Hello World</Text>
      <Button
        title="Go To Details"
        onPress={() => navigation.navigate('Details', {})}
      />
      <Button title="Go To List" onPress={() => navigation.navigate('List')} />
    </View>
  );
}
