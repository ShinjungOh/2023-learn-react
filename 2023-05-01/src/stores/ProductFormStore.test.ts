import ProductFormStore from './ProductFormStore';
import fixtures from '../../fixtures';

const addProductToCart = jest.fn();

// MSW를 활용해도 됨
jest.mock('../services/ApiService', () => ({
	get apiService() {
		return {
			addProductToCart,
		};
	},
}));

const context = describe;

describe('ProductFormStore', () => {
	let store: ProductFormStore;

	beforeEach(() => {
		jest.clearAllMocks();

		store = new ProductFormStore();
	});

	describe('setProduct', () => {
		const [product] = fixtures.products;

		it('sets state', () => {
			store.setProduct(product);

			expect(store.product).toBe(product);
			expect(store.selectedOptionItems).toHaveLength(product.options.length);
			expect(store.quantity).toBe(1);
		});
	});

	describe('changeOptionItem', () => {
		const [product] = fixtures.products;
		const [, option] = product.options;

		beforeEach(() => {
			store.setProduct(product);
		});

		context('with correct IDs', () => {
			it('sets option item', () => {
				const prevItems = store.selectedOptionItems;

				store.changeOptionItem({
					optionId: option.id,
					optionItemId: option.items[1].id,
				});

				expect(store.selectedOptionItems).toEqual([
					prevItems[0],
					{
						id: option.items[1].id,
						name: option.items[1].name,
					},
				]);
			});
		});

		context('with incorrect item ID', () => {
			it('doesn`t change anything', () => {
				const prevItems = store.selectedOptionItems;

				store.changeOptionItem({
					optionId: option.id,
					optionItemId: 'xxx',
				});

				expect(store.selectedOptionItems).toEqual(prevItems);
			});
		});
	});

	describe('changeQuantity', () => {
		const [product] = fixtures.products;

		beforeEach(() => {
			store.setProduct(product);
		});

		context('with correct value', () => {
			it('changes quantity', () => {
				store.changeQuantity(3);

				expect(store.quantity).toBe(3);
			});
		});

		// 범위를 넘어서는 값은 Quantity가 아니라 여기에서 확인하면 편리
		context('with incorrect value', () => {
			it('doesn\'t changes quantity', () => {
				store.changeQuantity(-1);
				store.changeQuantity(11);

				expect(store.quantity).toBe(1);
			});
		});
	});

	describe('addToCart', () => {
		const [product] = fixtures.products;

		beforeEach(() => {
			store.setProduct(product);
		});

		it('calls "addProductToCart" request', () => {
			store.addToCart();

			expect(addProductToCart).toBeCalled();
		});
	});
});
