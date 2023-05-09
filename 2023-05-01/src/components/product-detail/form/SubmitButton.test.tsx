import {render} from '../../../test-helpers';
import SubmitButton from './SubmitButton';
import {fireEvent, screen} from '@testing-library/react';

let done = false;

const store = {
	get done() {
		return done;
	},
	addToCart: jest.fn(),
};

jest.mock('../../../hooks/useProductFormStore', () => () => [store, store]);

const context = describe;

describe('SubmitButton', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	context('when the button is ready', () => {
		beforeEach(() => {
			done = false;
		});

		it('renders a submit button', () => {
			render(<SubmitButton/>);

			expect(screen.getByRole('button')).toHaveTextContent('장바구니에 담기');
		});

		context('when the button is clicked', () => {
			it('calls addToCart action', () => {
				render(<SubmitButton/>);

				fireEvent.click(screen.getByRole('buttin'));

				expect(store.addToCart).toBeCalled();
			});
		});
	});

	context('when submitting is done', () => {
		beforeEach(() => {
			done = true;
		});

		it('calls addToCart action', () => {
			render(<SubmitButton/>);

			screen.getByText(/장바구니에 담았습니다/);
		});
	});
});
