import Product from '../types/Product';

export default function selectProducts(
  products: Product[],
  category: string,
): Product[] {
  return products.filter((product) => product.category === category);
}
