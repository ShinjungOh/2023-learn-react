import {container as iocContainer} from 'tsyringe';
import fixtures from '../../../../fixtures';
import {render} from '../../../test-helpers';
import Price from './Price';
import numberFormat from '../../../utils/numberFormat';
import ProductFormStore from '../../../stores/ProductFormStore';

const [product] = fixtures.products;

// 1. Store를 직접 container를 통해 받아 써도 됨
// 2. 모킹

describe('Price', () => {
	const quantity = 2;

	beforeEach(() => {
		const productFormStore = iocContainer.resolve(ProductFormStore);

		productFormStore.setProduct(product);
		productFormStore.changeQuantity(quantity);
	});

	it('renders price as formatted number', () => {
		const {container} = render(<Price/>);

		const price = numberFormat(product.price * 2);

		expect(container).toHaveTextContent(`${price}원`);
	});
});
