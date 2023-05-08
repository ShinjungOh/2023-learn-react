import {type Image} from '../../types';
import {render} from '../../test-helpers';
import Images from './Images';
import {screen} from '@testing-library/react';

const context = describe;

describe('Images', () => {
	context('when images is empty', () => {
		const images: Image[] = [];

		it('render nothing', () => {
			const {container} = render(<Images images={images}/>);

			expect(container).toBeEmptyDOMElement();
		});
	});

	context('when images is not empty', () => {
		const images: Image[] = [{url: 'http://example.com/test.jpg'}];

		it('render image', () => {
			render(<Images images={images}/>);

			screen.getByRole('img');
		});
	});
});
