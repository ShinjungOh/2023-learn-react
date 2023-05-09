import {type OrderOption} from '../../types';
import {render} from '../../test-helpers';
import Options from './Options';
import fixtures from '../../../fixtures';
import {screen} from '@testing-library/react';

const context = describe;

describe('Options', () => {
	context('when options is empty', () => {
		const options: OrderOption[] = [];

		it('renders nothing', () => {
			const {container} = render(<Options options={options}/>);

			expect(container).toBeEmptyDOMElement();
		});
	});

	context('when options is not empty', () => {
		const [lineItem] = fixtures.cart.lineItems;
		const {options} = lineItem;

		it('renders options text', () => {
			const {container} = render(<Options options={options}/>);

			const optionName = options[0].name;
			const itemName = options[0].item.name;

			// 다른 사용 방법
			// screen.getByText(new RegExp(optionName));

			expect(container).toHaveTextContent(`${optionName}: ${itemName}`);
		});
	});
});
