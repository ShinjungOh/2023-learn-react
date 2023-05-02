import Products from '../components/product-list/Products';
import useFetchProducts from '../hooks/useFetchProducts';

export default function ProductListPage() {
	// Todo 1. 상품 목록 얻기
	const {products} = useFetchProducts();

	// Todo 2. 화면에 보여주기
	return (
		<div>
			<h2>Products</h2>
			<Products products={products}/>
		</div>
	);
}
