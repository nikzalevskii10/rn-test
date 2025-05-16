import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {
  ButtonContainer,
  ButtonText,
  Container,
  StyledButton,
  Subtitle,
  Title,
} from './styles';
import {lightTheme, useTheme} from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({navigation}: Props) {
  const {toggleTheme, theme} = useTheme();

  return (
    <Container>
      <Title>Home Screen</Title>
      <Subtitle>Welcome to our app!</Subtitle>
      <ButtonContainer>
        <StyledButton onPress={() => navigation.navigate('Details', {})}>
          <ButtonText>Go To Details</ButtonText>
        </StyledButton>
        <StyledButton onPress={() => navigation.navigate('Main')}>
          <ButtonText>Go To Main</ButtonText>
        </StyledButton>
        <StyledButton onPress={toggleTheme}>
          <ButtonText>
            Switch to {theme === lightTheme ? 'Dark' : 'Light'} Theme
          </ButtonText>
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
}
