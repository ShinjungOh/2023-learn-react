import {render} from '../../test-helpers';
import fixtures from '../../../fixtures';
import LineItemView from './LineItemView';
import {screen} from '@testing-library/react';

describe('LineItemView', () => {
	it('renders a line item', () => {
		const [lineItem] = fixtures.cart.lineItems;

		render((
			<table>
				<tbody>
					<LineItemView lineItem={lineItem}/>
				</tbody>
			</table>
		));
		screen.getByText(lineItem.product.name);
	});
});
