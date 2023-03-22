import Product from '../types/Product';
import ProductsInCategory from './ProductsInCategory';
import selectCategories from '../utils/selectCategories';

type ProductTableProps = {
  product: Product[];
}

export default function ProductTable({ products }: ProductTableProps) {
  const categories = selectCategories(products);

  return (
    <table className='products-table'>
      <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
      {
        categories.map((category) => (
          <ProductsInCategory
            key={category}
            category={category}
            products={products}
          />
        ))
      }
      </tbody>
    </table>
  );
}
