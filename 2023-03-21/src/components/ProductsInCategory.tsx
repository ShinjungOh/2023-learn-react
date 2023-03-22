import Product from '../types/Product';

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
        <tr key={product.name}>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      ))}
    </>
  );
}
