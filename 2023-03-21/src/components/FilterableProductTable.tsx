import TimerControl from './TimerControl';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import Product from '../types/Product';
import { useEffect, useRef, useState } from 'react';
import filterProducts from '../utils/filterProducts';

type FilterableProductTableProps = {
  products: Product[];
}

export default function FilterableProductTable({ products }: FilterableProductTableProps) {
  const query = useRef('');

  const [filterText, setFilterText] = useState<string>('');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  const filteredProducts = filterProducts(products, {
    filterText, inStockOnly,
  });

  useEffect(() => {
    query.current = filterText;
  }, [filterText]);

  useEffect(() => {
    setTimeout(() => {
      console.log(query.current);
    }, 5_000);
  }, []);

  return (
    <div>
      <TimerControl />
      <hr />
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}
