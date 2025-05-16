import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {styles} from './styles';
import {products} from '../../data/products';

function ListHeader() {
  return <Text>Заголовок</Text>;
}

function ItemSeparator() {
  return <View style={styles.separator} />;
}

function ListEmpty() {
  return <Text>Список пуст</Text>;
}

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

export default function MainScreen({navigation}: Props) {
  return (
    <View style={styles.screen}>
      <FlatList
        ListHeaderComponent={ListHeader}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={ListEmpty}
        data={products}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({item}) => (
          <Pressable
            style={styles.pressable}
            onPress={() => {
              navigation.navigate('Details', {id: item.id, title: item.title});
            }}>
            <View style={styles.item}>
              <Image source={{uri: item.image}} style={styles.image} />
              <View style={styles.itemContent}>
                <Text style={styles.title} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.category}>{item.category}</Text>
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>${item.price}</Text>
                  <Text style={styles.stock}>In stock: {item.stock}</Text>
                </View>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}
