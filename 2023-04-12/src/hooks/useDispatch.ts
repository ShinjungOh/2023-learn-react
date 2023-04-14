import {container} from 'tsyringe';
import {type Action} from '../stores/BaseStore';
import Store from '../stores/Store';

export default function useDispatch<Payload>() {
	const store = container.resolve(Store);

	return (action: Action<Payload>) => {
		store.dispatch<Payload>(action);
	};
}
