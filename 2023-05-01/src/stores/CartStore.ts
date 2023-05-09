import {singleton} from 'tsyringe';
import {Action, Store} from 'usestore-ts';

import {type Cart} from '../types';
import {apiService} from '../services/ApiService';

@singleton()
@Store()
export default class CartStore {
	// eslint-disable-next-line
	cart: Cart | null = null;

	async fetchCart() {
		this.setCart(null);

		const cart = await apiService.fetchCart();

		this.setCart(cart);
	}

	@Action()
	// eslint-disable-next-line
	setCart(cart: Cart | null) {
		this.cart = cart;
	}
}
