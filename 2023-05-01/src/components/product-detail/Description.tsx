import styled from 'styled-components';

const Container = styled.div`
  li {
    min-height: 1rem;
    line-height: 1.4;
  }
`;

type DescriptionProps = {
	value: string;
};

function key(text: string, index: number) {
	return `${text}-${index}`;
}

export default function Description({value}: DescriptionProps) {
	if (!value.trim()) {
		return null;
	}

	const lines = value.split('\n');

	return (
		<Container>
			<ul>
				{lines.map((line, index) => (
					<li key={key(line, index)}>
						{line}
					</li>
				))}
			</ul>
		</Container>
	);
}
