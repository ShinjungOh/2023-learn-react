import FilterableProductTable from './components/FilterableProductTable';
import useFetchProducts from './hooks/useFetchProducts';

export default function App() {
  const products = useFetchProducts();

  return (
    <>
      <h1>상품</h1>
      <FilterableProductTable products={products} />
    </>
  );
}
