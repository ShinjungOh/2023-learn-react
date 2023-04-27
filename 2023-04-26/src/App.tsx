import {Reset} from 'styled-reset';
import GlobalStyle from './styles/GlobalStyle';

import Greeting from './component/Greeting';
import Switch from './component/Switch';

export default function App() {
	return (
		<div>
			<Reset/>
			<GlobalStyle/>
			<Greeting/>
			<Switch/>
		</div>
	);
}
