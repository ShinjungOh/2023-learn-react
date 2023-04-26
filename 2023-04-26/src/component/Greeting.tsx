import styled from 'styled-components';

const Paragraph = styled.p`
	color: #00F;

	strong {
		font-size: 2em;
		color: #F00;
	}
`;

const BigParagraph = styled(Paragraph)`
	font-size: 2rem;
	
	strong {
		font-size: 1.5em;
	}
`;

export default function Greeting() {
	return (
		<BigParagraph>
      Hello
			<strong>!</strong>
		</BigParagraph>
	);
}
