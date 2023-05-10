import fixtures from '../../../fixtures';
import {render} from '../../test-helpers';
import ProductDetail from './ProductDetail';
import {screen} from '@testing-library/react';
import {container} from 'tsyringe';
import ProductDetailStore from '../../stores/ProductDetailStore';

const [product] = fixtures.products;

// 방법 1. 모킹하기
// jest.mock('../../hooks/useProductDetailStore', () => () => [
// 	{product},
// ]);

test('ProductDetail', async () => {
	// 방법 2. MSW 사용하기
	const store = container.resolve(ProductDetailStore);

	await store.fetchProduct({productId: product.id});

	render(<ProductDetail />);

	screen.getByText(/합계/);
	screen.getByText(/장바구니에 담기/);
});
