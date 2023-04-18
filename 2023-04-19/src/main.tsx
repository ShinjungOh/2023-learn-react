import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter} from 'react-router-dom';
import App from './App';

function main() {
	const element = document.getElementById('root');

	if (!element) {
		return;
	}

	const root = ReactDOM.createRoot(element);

	root.render((
		<React.StrictMode>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</React.StrictMode>
	));
}

main();
