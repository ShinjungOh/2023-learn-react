import ReactDOM from 'react-dom/client';
import React from 'react';

import 'reflect-metadata';
import {Reset} from 'styled-reset';
import GlobalStyle from './styles/GlobalStyle';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import routes from './routes';
import {ThemeProvider} from 'styled-components';
import defaultTheme from './styles/defaultTheme';

const router = createBrowserRouter(routes);

function main() {
	const container = document.getElementById('root');

	if (!container) {
		return;
	}

	const root = ReactDOM.createRoot(container);
	root.render(
		<React.StrictMode>
			<ThemeProvider theme={defaultTheme}>
				<Reset/>
				<GlobalStyle/>
				<RouterProvider router={router}/>
			</ThemeProvider>
		</React.StrictMode>,
	);
}

main();
