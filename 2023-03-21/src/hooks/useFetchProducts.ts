import {useState} from 'react';
import type Product from '../types/Product';
import {useEffectOnce, useFetch} from 'usehooks-ts';

function useFetchProductsOld() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffectOnce(() => {
		const fetchProducts = async () => {
			const url = 'http://localhost:3000/products';
			const response = await fetch(url);
			const data = await response.json();
			setProducts(data.products);
		};

		fetchProducts();
	});

	return products;
}

type ProductsResult = {
	products: Product[];
};

export default function useFetchProducts() {
	const url = 'http://localhost:3000/products';
	const {data} = useFetch<ProductsResult>(url);
	if (!data) {
		return [];
	}

	return data.products;
}
