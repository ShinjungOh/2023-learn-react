import ProductFormStore from './ProductFormStore';

const context = describe;

describe('ProductFormStore', () => {
	let store: ProductFormStore;

	beforeEach(() => {
		store = new ProductFormStore();
	});

	describe('changeQuantity', () => {
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
});
