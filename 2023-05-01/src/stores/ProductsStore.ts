import {singleton} from 'tsyringe';
import {Action, Store} from 'usestore-ts';

import {type ProductSummary} from '../types';
import {apiService} from '../services/ApiService';

@singleton()
@Store()
export default class ProductsStore {
	products: ProductSummary[] = [];

	async fetchProducts() {
		this.setProducts([]);

		const products = await apiService.fetchProducts();

		this.setProducts(products);
	}

	@Action()
	setProducts(products: ProductSummary[]) {
		this.products = products;
	}
}
