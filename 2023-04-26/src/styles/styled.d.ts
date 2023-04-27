import 'styled-components';
import type Theme from './Theme';

declare module 'styled-components' {
	export type DefaultTheme = Record<string, unknown> & Theme;
}
