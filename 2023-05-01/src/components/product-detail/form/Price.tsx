import styled from 'styled-components';

import useProductDetailStore from '../../../hooks/useProductDetailStore';
import useProductFormStore from '../../../hooks/useProductFormStore';
import numberFormat from '../../../utils/numberFormat';

const Container = styled.div`
	margin-block: .2rem;
	
	div {
		margin-block: .5rem;
	}
`;

export default function Price() {
	const [{product}] = useProductDetailStore();
	const [{quantity}] = useProductFormStore();

	return (
		<Container>
			<div>
				개당 가격: {numberFormat(product.price)}원
			</div>
			<div>
				합계 금액: {numberFormat(product.price * quantity)}원
			</div>
		</Container>
	);
}
