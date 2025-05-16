import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../navigation/AppNavigator';

const DATA = [
  {id: '1', title: '🍎 Apple'},
  {id: '2', title: '🍌 Banana'},
  {id: '3', title: '🍇 Grape'},
  {id: '4', title: '🍑 Peach'},
  {id: '5', title: '🥝 Kiwi'},
];

function ListHeader() {
  return <Text>Заголовок</Text>;
}

function ItemSeparator() {
  return <View style={styles.separator} />;
}

function ListEmpty() {
  return <Text>Список пуст</Text>;
}

type Props = NativeStackScreenProps<RootStackParamList, 'List'>;

export default function ListScreen({navigation}: Props) {
  return (
    <View style={styles.screen}>
      <FlatList
        ListHeaderComponent={ListHeader}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={ListEmpty}
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Details', {id: item.id, title: item.title});
            }}>
            <View style={styles.item}>
              <Text>{item.title}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

// Временные стили для экрана и элементов списка
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  item: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
});
