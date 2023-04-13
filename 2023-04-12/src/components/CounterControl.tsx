import useStore from '../hooks/useStore';
import {increase, decrease} from '../stores/Store';
import useDispatch from '../hooks/useDispatch';

export default function CounterControl() {
	const dispatch = useDispatch();

	const {state} = useStore();

	return (
		<div>
			<p>{state.count}</p>
			<button
				type='button'
				onClick={() => {
					dispatch(increase());
				}}
			>
        Increase
			</button>
			<button
				type='button'
				onClick={() => {
					dispatch(decrease());
				}}
			>
        Decrease
			</button>
		</div>
	);
}
