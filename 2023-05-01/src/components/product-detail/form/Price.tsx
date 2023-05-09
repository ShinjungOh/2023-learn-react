import styled from 'styled-components';
import numberFormat from '../../../utils/numberFormat';
import useProductFormStore from '../../../hooks/useProductFormStore';

const Container = styled.div`
  margin-block: .2rem;

  div {
    margin-block: .5rem;
  }
`;

export default function Price() {
	const [, productFormStore] = useProductFormStore();

	return (
		<Container>
			<div>
        합계 금액: {numberFormat(productFormStore.price)}원
			</div>
		</Container>
	);
}
