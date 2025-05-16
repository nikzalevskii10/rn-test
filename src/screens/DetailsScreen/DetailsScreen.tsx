import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {products} from '../../data/products';
import {
  Container,
  Content,
  ImageContainer,
  ProductImage,
  Title,
  Price,
  Category,
  Description,
  InfoContainer,
  InfoRow,
  InfoLabel,
  InfoValue,
  ButtonContainer,
  StyledButton,
  ButtonText,
} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen({navigation, route}: Props) {
  const {id} = route.params;
  const product = products.find(p => p.id === id);

  if (!product) {
    return null;
  }

  return (
    <Container>
      <Content>
        <ImageContainer>
          <ProductImage source={{uri: product.image}} resizeMode="cover" />
        </ImageContainer>

        <Title>{product.title}</Title>
        <Price>${product.price}</Price>
        <Category>{product.category}</Category>
        <Description>{product.description}</Description>

        <InfoContainer>
          <InfoRow>
            <InfoLabel>Rating</InfoLabel>
            <InfoValue>
              {product.rating.rate} ⭐️ ({product.rating.count})
            </InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Stock</InfoLabel>
            <InfoValue>{product.stock} units</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Created</InfoLabel>
            <InfoValue>
              {new Date(product.createdAt).toLocaleDateString()}
            </InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Updated</InfoLabel>
            <InfoValue>
              {new Date(product.updatedAt).toLocaleDateString()}
            </InfoValue>
          </InfoRow>
        </InfoContainer>

        <ButtonContainer>
          <StyledButton onPress={() => navigation.navigate('Home')}>
            <ButtonText>Go To Home</ButtonText>
          </StyledButton>
        </ButtonContainer>
      </Content>
    </Container>
  );
}
