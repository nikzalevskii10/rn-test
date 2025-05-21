// src/theme/index.ts
import React from 'react';
import {
  useState,
  useCallback,
  useMemo,
  useContext,
  createContext,
  FC,
} from 'react';

export type ThemeType = 'light' | 'dark';

export const lightTheme = {
  colors: {
    // Основные цвета
    primary: '#6200ee',
    secondary: '#03dac6',
    accent: '#bb86fc',

    // Фоновые цвета
    background: '#ffffff',
    surface: '#f5f5f5',
    card: '#ffffff',

    // Текстовые цвета
    text: '#000000',
    textSecondary: '#666666',
    textTertiary: '#999999',

    // Статусные цвета
    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3',

    // Границы и разделители
    border: '#e0e0e0',
    divider: '#eeeeee',

    // Дополнительные цвета
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent',
  },

  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
  },

  borderRadius: {
    xs: 2,
    s: 4,
    m: 8,
    l: 16,
    xl: 24,
    round: 9999,
  },

  typography: {
    fontFamily: {
      regular: 'System',
      medium: 'System',
      bold: 'System',
    },
    fontSize: {
      xs: 12,
      s: 14,
      m: 16,
      l: 18,
      xl: 20,
      xxl: 24,
      xxxl: 32,
    },
    lineHeight: {
      xs: 16,
      s: 20,
      m: 24,
      l: 28,
      xl: 32,
      xxl: 36,
      xxxl: 40,
    },
  },

  shadows: {
    s: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 1,
    },
    m: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    l: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    // Переопределяем цвета для темной темы
    primary: '#bb86fc',
    secondary: '#03dac6',
    accent: '#3700b3',

    background: '#121212',
    surface: '#1e1e1e',
    card: '#2d2d2d',

    text: '#ffffff',
    textSecondary: '#b3b3b3',
    textTertiary: '#808080',

    border: '#333333',
    divider: '#2d2d2d',
  },
};

export type AppTheme = typeof lightTheme;

interface ThemeContextType {
  theme: AppTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsDark(prev => !prev);
  }, []);

  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
