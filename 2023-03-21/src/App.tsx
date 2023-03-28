import Product from './types/Product';
import FilterableProductTable from './components/FilterableProductTable';

export default function App({ products }: {
  products: Product[];
}) {
  return (
    <>
      <h1>상품</h1>
      <FilterableProductTable products={products} />
    </>
  );
}
