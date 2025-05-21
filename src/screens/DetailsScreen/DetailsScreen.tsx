import React from 'react';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {products} from '../../data/products';
import {createStyles} from './styles';
import {useTheme} from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen({navigation, route}: Props) {
  const {id} = route.params;
  const {theme} = useTheme();
  const styles = createStyles(theme);
  const product = products.find(p => p.id === id);

  if (!product) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: product.image}}
            style={styles.productImage}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Rating</Text>
            <Text style={styles.infoValue}>
              {product.rating.rate} ⭐️ ({product.rating.count})
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Stock</Text>
            <Text style={styles.infoValue}>{product.stock} units</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Created</Text>
            <Text style={styles.infoValue}>
              {new Date(product.createdAt).toLocaleDateString()}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Updated</Text>
            <Text style={styles.infoValue}>
              {new Date(product.updatedAt).toLocaleDateString()}
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Go To Home</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
