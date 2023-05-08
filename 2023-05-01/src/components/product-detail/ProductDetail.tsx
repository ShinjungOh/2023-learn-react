import styled from 'styled-components';
import Images from './Images';
import Description from './Description';

import useProductDetailStore from '../../hooks/useProductDetailStore';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  aside {
    width: 38%;
  }

  article {
    width: 60%;
  }
`;

function AddToCartForm() {
	return (
		<div>장바구니에 추가</div>
	);
}

export default function ProductDetail() {
	// Store 에서 상품 정보 얻기 - fetch는 page에서 처리

	// 보여주기

	const [{product}] = useProductDetailStore();

	return (
		<Container>
			<aside>
				<Images images={product.images} />
			</aside>
			<article>
				<h2>{product.name}</h2>
				<AddToCartForm />
				<Description value={product.description} />
			</article>
		</Container>
	);
}
