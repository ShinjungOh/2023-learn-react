import styled from 'styled-components';
import type React from 'react';

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

function HelloWorld({className}: React.HTMLAttributes<HTMLElement>) {
	return (
		<BigParagraph className={className}>
			Hello
			<strong>!</strong>
		</BigParagraph>
	);
}

const SmallHelloWorld = styled(HelloWorld)`
	font-size: .5em;
`;

export default function Greeting() {
	return (
		<SmallHelloWorld/>
	);
}
