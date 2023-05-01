import {render, screen} from '@testing-library/react';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';

import routes from './routes';
import {ThemeProvider} from 'styled-components';
import defaultTheme from './styles/defaultTheme';

const context = describe;

describe('routes', () => {
	function renderRouter(path: string) {
		const	router = createMemoryRouter(routes, {initialEntries: [path]});
		render((
			<ThemeProvider theme={defaultTheme}>
				<RouterProvider router={router}/>
			</ThemeProvider>
		));
	}

	context('When the current path is "/")', () => {
		it('renders the home page', () => {
			renderRouter('/');

			// Screen.getByText(/Welcome/);
		});
	});

	context('When the current path is "/about")', () => {
		it('renders the home page', () => {
			renderRouter('/about');

			screen.getByText(/Test/);
		});
	});

	context('When the current path is "/logout")', () => {
		it('redirects to the home page', () => {
			renderRouter('/logout');

			screen.getByText(/Welcome/);
		});
	});
});
