import Product from '../types/Product';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

type ProductsInCategoryProps = {
  category: string;
  products: Product[];
}

export default function ProductsInCategory({ category, products }: ProductsInCategoryProps) {
  const productsInCategory = products.filter((product) => product.category === category);

  return (
    <>
      <ProductCategoryRow category={category} />
      {productsInCategory.map((product) => (
        <ProductRow key={product.name} product={product} />
      ))}
    </>
  );
}
