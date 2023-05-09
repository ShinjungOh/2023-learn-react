import {singleton} from 'tsyringe';
import {Action, Store} from 'usestore-ts';
import {nullProductDetail, type ProductDetail, type ProductOptionItem} from '../types';
import {apiService} from '../services/ApiService';

@singleton()
@Store()
export default class ProductFormStore {
	product: ProductDetail = nullProductDetail;

	selectedOptionItems: ProductOptionItem[] = [];

	quantity = 1;

	done = false;

	async addToCart() {
		this.resetDone();

		await apiService.addProductToCart({
			productId: this.product.id,
			options: this.product.options.map((option, index) => ({
				id: option.id,
				itemId: this.selectedOptionItems[index].id,
			})),
			quantity: this.quantity,
		});

		this.complete();
	}

	@Action()
	changeQuantity(quantity: number) {
		if (quantity <= 0) {
			return;
		}

		if (quantity > 10) {
			return;
		}

		this.quantity = quantity;
	}

	@Action()
	setProduct(product: ProductDetail) {
		this.product = product;
		this.selectedOptionItems = this.product.options.map(i => i.items[0]);
		this.quantity = 1;
		this.done = false;
	}

	@Action()
	resetDone() {
		this.done = false;
	}

	@Action()
	complete() {
		this.quantity = 1;
		this.done = true;
	}

	// 복잡한 로직의 경우 이런 방식으로 구현
	// 할인, 쿠폰 적용가 등을 처리할 수 있음
	get price() {
		return this.product.price * this.quantity;
	}
}
