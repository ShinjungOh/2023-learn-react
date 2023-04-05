import fixtures from '../../../fixtures';

// Const useFetchProducts = () => fixtures.products;
const useFetchProducts = jest.fn(() => fixtures.products);

export default useFetchProducts;
