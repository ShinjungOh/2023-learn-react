import Product from '../types/Product';
import ProductRow from './ProductRow';

type ProductsInCategoryProps = {
  category: string;
  products: Product[];
}

export default function ProductsInCategory({ category, products }: ProductsInCategoryProps) {
  const productsInCategory = products.filter((product) => product.category === category);

  return (
    <>
      <tr>
        <th colSpan={2}>
          {category}
        </th>
      </tr>
      {productsInCategory.map((product) => (
        <ProductRow key={product.name} product={product} />
      ))}
    </>
  );
}
