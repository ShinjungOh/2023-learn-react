import {render, screen} from '@testing-library/react';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';

import routes from './routes';

const context = describe;

describe('App', () => {
	function renderRouter(path: string) {
		const	router = createMemoryRouter(routes, {initialEntries: [path]});
		render(<RouterProvider router={router}/>);
	}

	context('When the current path is "/")', () => {
		it('renders the home page', () => {
			renderRouter('/');

			screen.getByText(/Welcome/);
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
