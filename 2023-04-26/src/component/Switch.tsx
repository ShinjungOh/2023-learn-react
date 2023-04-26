import styled, {css} from 'styled-components';
import {useBoolean} from 'usehooks-ts';

type ButtonProps = {
	active?: boolean;
};

// Function background(props: ButtonProps) {
// 	return props.active ? '#00F' : '#FFF';
// }

const Button = styled.button<ButtonProps>`
	background: #FFF;
	color: #000;
	border: 1px solid ${(props: ButtonProps) => (props.active ? '#F00' : '#888')};
	
	${props => props.active && css`
		background: #00F;
		color: #FFF;
	`}
`;

export default function Switch() {
	const {value: active, toggle} = useBoolean(false);

	return (
		<Button type='button' onClick={toggle} active={active}>
			On/Off
		</Button>
	);
}
