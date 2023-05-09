import {container} from 'tsyringe';
import fixtures from '../../../../fixtures';
import ProductDetailStore from '../../../stores/ProductDetailStore';
import {render} from '../../../test-helpers';
import AddToCartForm from './AddToCartForm';
import {fireEvent, screen, waitFor} from '@testing-library/react';

test('AddToCartForm', async () => {
	container.clearInstances();

	const [product] = fixtures.products;

	const productDetailStore = container.resolve(ProductDetailStore);

	// MSW 사용
	await productDetailStore.fetchProduct({productId: product.id});

	render(<AddToCartForm/>);

	fireEvent.click(screen.getByText('장바구니에 담기'));

	await waitFor(() => {
		screen.getByText(/장바구니에 담았습니다/);
	});
});
