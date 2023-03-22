import Product from './types/Product';
import ProductTable from './components/ProductTable';

const products: Product[] = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];

export default function App() {
  return (
    <div className='filterable-product-table'>
      <div className='search-bar'>
        <div>
          <input type='text' placeholder='Search...' />
        </div>
        <div>
          <input type='checkbox' id='only-stock' />
          <label htmlFor='only-stock'>
            Only shoe products in stock
          </label>
        </div>
      </div>
      <ProductTable products={products} />
    </div>
  );
}
