import Product from './types/Product';
import FilterableProductTable from './components/FilterableProductTable';
import { useEffect, useState } from 'react';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = 'http://localhost:3000/products';
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>상품</h1>
      <FilterableProductTable products={products} />
    </>
  );
}
