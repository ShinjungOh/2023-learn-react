import {useDarkMode} from 'usehooks-ts';

import {Reset} from 'styled-reset';
import GlobalStyle from './styles/GlobalStyle';

import {ThemeProvider} from 'styled-components';
import defaultTheme from './styles/defaultTheme';
import darkTheme from './styles/darkTheme';

import Greeting from './component/Greeting';
import Switch from './component/Switch';
import Button from './component/Button';

export default function App() {
	const {isDarkMode, toggle} = useDarkMode();

	const theme = isDarkMode ? darkTheme : defaultTheme;

	return (
		<ThemeProvider theme={theme}>
			<Reset/>
			<GlobalStyle/>
			<Greeting/>
			<Switch/>
			<Button onClick={toggle} active={isDarkMode}>
				Toggle DarkMode
			</Button>
		</ThemeProvider>
	);
}
