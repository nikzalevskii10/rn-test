import 'styled-components/native';
import {AppTheme} from './index';

declare module 'styled-components/native' {
  interface DefaultTheme extends AppTheme {}
}
