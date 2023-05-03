import {render, screen, waitFor} from '@testing-library/react';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';

import routes from './routes';
import {ThemeProvider} from 'styled-components';
import defaultTheme from './styles/defaultTheme';
import fixtures from '../fixtures';

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

			// Screen.getByText(/Category #1/);
		});
	});

	context('When the current path is "/products")', () => {
		context('without category ID', () => {
			it('renders the product list page', async () => {
				renderRouter('/products');

				// Await waitFor(() => {
				// 	screen.getByText(/Product #1/);
				// });
			});
		});

		context('with category ID', () => {
			it('renders the product list page', async () => {
				renderRouter(`/products?categoryId=${fixtures.categories}`);

				// Await waitFor(() => {
				// 	screen.getByText(/Product #1/);
				// });
			});
		});
	});
});
