import {type ProductSummary} from '../../types';

type ProductsProps = {
	products: ProductSummary[];
};

export default function Products({products}: ProductsProps) {
	return (
		<div>
			{products.map(product => (
				<p key={product.id}>
					{JSON.stringify(product)}
				</p>
			))}
		</div>
	);
}
