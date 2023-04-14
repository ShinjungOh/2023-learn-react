import {container} from 'tsyringe';
import {useEffect, useRef} from 'react';
import useForceUpdate from './useForceUpdate';
import Store, {type State} from '../stores/Store';

type Selector<T> = (state: State) => T;

export default function useSelector<T>(selector: Selector<T>): T {
	const store = container.resolve(Store);

	const state = useRef(selector(store.state));

	const forceUpdate = useForceUpdate();

	useEffect(() => {
		const update = () => {
			// 특정 조건이 맞으면 forceUpdate
			const newState = selector(store.state);
			// Selector의 결과가 객체인 경우 처리 필요
			if (newState !== state.current) {
				forceUpdate();
				state.current = newState;
			}
		};

		store.addListener(update);

		return () => {
			store.removeListener(forceUpdate);
		};
	}, [store, forceUpdate]);

	return selector(store.state);
}
