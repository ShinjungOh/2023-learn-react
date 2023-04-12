import {useState} from 'react';

export default function useForceUpdate() {
	const [, setState] = useState({});

	// UseState와 forceUpdate 함수로 useReducer와 동일 효과
	const forceUpdate = () => {
		setState({}); // 새로운 객체 생성
	};

	return forceUpdate;
}
