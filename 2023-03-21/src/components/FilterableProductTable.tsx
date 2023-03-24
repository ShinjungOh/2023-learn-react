import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import Product from '../types/Product';
import { useState } from 'react';
import filterProducts from '../utils/filterProducts';

type FilterableProductTableProps = {
  products: Product[];
}

export default function FilterableProductTable({ products }: FilterableProductTableProps) {
  const [filterText, setFilterText] = useState<string>('');

  const filteredProducts = filterProducts(products, filterText);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}
