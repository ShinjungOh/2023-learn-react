import {fireEvent, render, screen} from '@testing-library/react';
import TextField from './TextField';

const context = describe;

describe('TextField', () => {
	// Given
	const label = 'Name';
	const text = 'Tester';

	const setText = jest.fn();

	beforeEach(() => {
		setText.mockClear();
		// Jest.clearAllMocks();
	});

	function renderTextField() {
		render((
			<TextField
				label={label}
				placeholder='Input your name'
				text={text}
				setText={setText}
			/>
		));
	}

	function inputText(value: string) {
		fireEvent.change(screen.getByLabelText(label), {
			target: {value},
		});
	}

	it('renders elements', () => {
		// When
		renderTextField();

		// Then
		screen.getByLabelText(label);
		screen.getByPlaceholderText(/name/);
		screen.getByDisplayValue(text);
	});

	context('when user enters name', () => {
		beforeEach(() => {
			// Given
			renderTextField();
		});

		it('calls "setText" handler', () => {
			// When
			inputText('New Name');

			// Then
			expect(setText).toBeCalledWith('New Name');
		});
	});
});
