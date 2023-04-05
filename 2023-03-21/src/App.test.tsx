import {render, screen} from '@testing-library/react';
import App from './App';
import fixtures from '../fixtures';
import useFetchProducts from './hooks/useFetchProducts';

jest.mock('./hooks/useFetchProducts');

// Jest.mock('./hooks/useFetchProducts', () => () => fixtures.products);

test('App', () => {
	render(<App />);

	screen.getByText('Apple');

	expect(useFetchProducts).toBeCalled();
});
