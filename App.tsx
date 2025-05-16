import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {ThemeProvider} from './src/theme';

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
