// src/theme/index.ts

export const theme = {
  colors: {
    primary: '#6200ee',
    background: '#fff',
    text: '#222',
    error: '#ff3333',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
  },
  borderRadius: {
    s: 4,
    m: 8,
    l: 16,
  },
  // Добавляй другие параметры по мере необходимости
};

export type AppTheme = typeof theme;
