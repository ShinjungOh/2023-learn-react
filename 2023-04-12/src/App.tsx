import Counter from './components/Counter';
import CounterControl from './components/CounterControl';
import NameCard from './components/NameCard';

export default function App() {
	return (
		<div>
			<p>Hello!</p>
			<Counter/>
			<Counter/>
			<CounterControl/>
			<NameCard/>
		</div>
	);
}
