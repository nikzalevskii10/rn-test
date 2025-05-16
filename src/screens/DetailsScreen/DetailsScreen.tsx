import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {Button, Text, View} from 'react-native';
import {commonStyles} from '../../styles/common';
type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen({navigation, route}: Props) {
  const {id, title} = route.params;
  return (
    <View style={commonStyles.centered}>
      <Text>Details Screen</Text>
      <Text>ID: {id}</Text>
      <Text>Title: {title}</Text>
      <Button title="Go To Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
