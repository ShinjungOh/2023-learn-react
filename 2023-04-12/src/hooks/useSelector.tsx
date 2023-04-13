import {type State} from '../stores/Store';
import useStore from '../hooks/useStore';

type Selector<T> = (state: State) => T;

export default function useSelector<T>(selector: Selector<T>): T {
	const store = useStore();

	return selector(store.state);
}
