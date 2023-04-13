import useDispatch from '../hooks/useDispatch';
import useSelector from '../hooks/useSelector';
import {increase, decrease} from '../stores/Store';

export default function CounterControl() {
	const dispatch = useDispatch();

	const count = useSelector(state => state.count);
	// Const name = useSelector(state => state.name);
	// Const countAndeName = useSelector(state => ({
	// 	count: state.count,
	// 	name: state.name,
	// }));

	return (
		<div>
			<p>{count}</p>
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
