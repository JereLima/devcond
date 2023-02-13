import 'styled-components';
import customTheme from '../presentation/theme';
declare module 'styled-components' {
  type ThemeType = typeof customTheme;

  export interface DefaultTheme extends ThemeType {}
}
