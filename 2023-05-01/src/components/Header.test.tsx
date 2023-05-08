import {render} from '../test-helpers';
import Header from './Header';
import {screen} from '@testing-library/react';

jest.mock('../hooks/useFetchCategories', () => () => ({
	categories: [],
}));

test('Header', () => {
	render(<Header/>);

	screen.getByText(/Shop/);
	screen.getByRole('link', {name: 'Home'});
});
