import {useEffect} from 'react';
import useForceUpdate from '../hooks/useForceUpdate';
import type ObjectStore from '../stores/ObjectStore';

export default function useObjectStore<T extends ObjectStore>(store: T): T {
	const forceUpdate = useForceUpdate();

	useEffect(() => {
		store.addListener(forceUpdate);

		return () => {
			store.removeListener(forceUpdate);
		};
	}, [store, forceUpdate]);

	return store;
}
