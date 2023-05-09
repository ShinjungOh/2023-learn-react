import {singleton} from 'tsyringe';
import {Action, Store} from 'usestore-ts';

@singleton()
@Store()
export default class ProductFormStore {
	quantity = 1;

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
}
