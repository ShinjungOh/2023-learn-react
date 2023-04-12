import useForceUpdate from '../hooks/useForceUpdate';

const state = {
	count: 0,
};

// 2. Reducer 함수
// Function reducer(state) {
// 	return {...state, x: state.x + 1};
// }

export default function Counter() {
	// 1. 기존의 useState
	// const [count, setCount] = useState(0);

	// 2. useReducer 이용
	// const [, forceUpdate] = useReducer(reducer, {x: 0});

	// 3. useForceUpdate 커스텀 훅 사용
	const forceUpdate = useForceUpdate();

	const handleClick = () => {
		state.count += 1;
		// 강제로 렌더링
		forceUpdate();
	};

	return (
		<div>
			<p>{state.count}</p>
			<button
				type='button'
				onClick={handleClick}
			>
        Increase
			</button>
		</div>
	);
}
