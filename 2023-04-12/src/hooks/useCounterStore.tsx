import useForceUpdate from '../hooks/useForceUpdate';
import {container} from 'tsyringe';
import {useEffect} from 'react';
import CounterStore from '../stores/CounterStore';

export default function useCounterStore() {
	const store = container.resolve(CounterStore);

	const forceUpdate = useForceUpdate();

	useEffect(() => {
		store.addListener(forceUpdate);

		return () => {
			store.removeListener(forceUpdate);
		};
	}, [store, forceUpdate]);

	return store;
}
