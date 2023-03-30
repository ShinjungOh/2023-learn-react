import { useState } from 'react';
import Product from '../types/Product';
import { useEffectOnce, useFetch } from 'usehooks-ts';

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

export default function useFetchProducts() {
  const url = 'http://localhost:3000/products';
  const { data } = useFetch(url);
  if (!data) {
    return [];
  }
  return data.products;
}
