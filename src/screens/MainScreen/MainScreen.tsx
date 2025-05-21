import React from 'react';
import {View, Text, Pressable, Image, FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {createStyles} from './styles';
import {useTheme} from '../../theme';
import {products} from '../../data/products';

function ListHeader({styles}: {styles: any}) {
  return <Text style={styles.itemTitle}>Заголовок</Text>;
}

function ItemSeparator({styles}: {styles: any}) {
  return <View style={styles.separator} />;
}

function ListEmpty({styles}: {styles: any}) {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Список пуст</Text>
    </View>
  );
}

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

export default function MainScreen({navigation}: Props) {
  const {theme} = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.screen}>
      <View style={styles.listContent}>
        <FlatList
          ListHeaderComponent={() => <ListHeader styles={styles} />}
          ItemSeparatorComponent={() => <ItemSeparator styles={styles} />}
          ListEmptyComponent={() => <ListEmpty styles={styles} />}
          data={products}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Pressable
              style={styles.itemContainer}
              onPress={() => {
                navigation.navigate('Details', {
                  id: item.id,
                  title: item.title,
                });
              }}>
              <View style={styles.item}>
                <Image source={{uri: item.image}} style={styles.itemImage} />
                <View style={styles.itemContent}>
                  <Text style={styles.itemTitle} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text style={styles.itemCategory}>{item.category}</Text>
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
    </View>
  );
}
