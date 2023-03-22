import Product from '../types/Product';
import ProductsInCategory from './ProductsInCategory';

export default function ProductTable({ products }: { products: Product[] }) {
  const categories = products.reduce((acc: string[], product: Product) => (
    acc.includes(product.category) ? acc : [...acc, product.category]
  ), []);

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
