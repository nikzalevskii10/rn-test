import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
