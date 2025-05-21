import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {ThemeProvider} from './src/theme';

import './config/ReactotronConfig';

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
