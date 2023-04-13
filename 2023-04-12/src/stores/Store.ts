import {singleton} from 'tsyringe';
import BaseStore, {type Action} from './BaseStore';

// Type State = {
//   count: number;
// }

const initialState = {
	count: 0,
	name: '',
};

export type State = typeof initialState;

function reducer(state: State, action: Action) {
	switch (action.type) {
		case 'increase':
			return {
				...state,
				count: state.count + 1,
			};
		case 'decrease':
			return {
				...state,
				count: state.count - 1,
			};
		default:
			return state;
	}
}

export function increase() {
	return {type: 'increase'};
}

export function decrease() {
	return {type: 'decrease'};
}

@singleton()
export default class Store extends BaseStore<State> {
	constructor() {
		super(initialState, reducer);
	}
}

