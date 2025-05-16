import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlatList} from 'react-native';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {
  EmptyContainer,
  EmptyText,
  Item,
  ItemCategory,
  ItemContainer,
  ItemContent,
  ItemImage,
  ItemTitle,
  ListContent,
  Price,
  PriceContainer,
  Screen,
  Separator,
  Stock,
} from './styles';
import {products} from '../../data/products';

function ListHeader() {
  return <ItemTitle>Заголовок</ItemTitle>;
}

function ItemSeparator() {
  return <Separator />;
}

function ListEmpty() {
  return (
    <EmptyContainer>
      <EmptyText>Список пуст</EmptyText>
    </EmptyContainer>
  );
}

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

export default function MainScreen({navigation}: Props) {
  return (
    <Screen>
      <ListContent>
        <FlatList
          ListHeaderComponent={ListHeader}
          ItemSeparatorComponent={ItemSeparator}
          ListEmptyComponent={ListEmpty}
          data={products}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <ItemContainer
              onPress={() => {
                navigation.navigate('Details', {
                  id: item.id,
                  title: item.title,
                });
              }}>
              <Item>
                <ItemImage source={{uri: item.image}} />
                <ItemContent>
                  <ItemTitle numberOfLines={1}>{item.title}</ItemTitle>
                  <ItemCategory>{item.category}</ItemCategory>
                  <PriceContainer>
                    <Price>${item.price}</Price>
                    <Stock>In stock: {item.stock}</Stock>
                  </PriceContainer>
                </ItemContent>
              </Item>
            </ItemContainer>
          )}
        />
      </ListContent>
    </Screen>
  );
}
